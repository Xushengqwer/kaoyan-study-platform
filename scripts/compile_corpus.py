# scripts/compile_corpus.py
import json
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from corpus_data.batch1 import ARTICLES_BATCH_1
from corpus_data.batch2 import ARTICLES_BATCH_2
from corpus_data.batch3 import ARTICLES_BATCH_3
from corpus_data.batch4 import ARTICLES_BATCH_4
from corpus_data.batch5 import ARTICLES_BATCH_5

def main():
    all_articles = []
    batches = [
        ("Batch 1", ARTICLES_BATCH_1),
        ("Batch 2", ARTICLES_BATCH_2),
        ("Batch 3", ARTICLES_BATCH_3),
        ("Batch 4", ARTICLES_BATCH_4),
        ("Batch 5", ARTICLES_BATCH_5),
    ]

    seen_ids = set()
    total_words = 0

    for batch_name, batch in batches:
        print(f"Loading {batch_name}: {len(batch)} articles...")
        for art in batch:
            art_id = art["id"]
            if art_id in seen_ids:
                raise ValueError(f"Duplicate article ID found: {art_id}")
            seen_ids.add(art_id)

            # Validate paragraphs
            for p in art["paragraphs"]:
                if not p.get("en") or not p.get("zh") or not p.get("chunks"):
                    raise ValueError(f"Incomplete paragraph in article {art_id}: {p}")

            # Validate questions
            for q in art["questions"]:
                if not q.get("question") or not q.get("answer") or not q.get("analysis"):
                    raise ValueError(f"Incomplete question in article {art_id}: {q}")
                if len(q.get("options", [])) != 4:
                    raise ValueError(f"Question in article {art_id} does not have 4 options: {q}")

            total_words += art.get("wordCount", 0)
            all_articles.append(art)

    print(f"\nSuccessfully validated {len(all_articles)} articles!")
    print(f"Total vocabulary scale: ~{total_words:,} words across all articles.")

    # Format JS output
    js_content = "// 研途宝 · 考研英语真题与外刊同源 50 篇权威精读文章文库 (Reading Corpus)\n"
    js_content += "// 全量收录 2015-2024 考研真题与 The Economist, Nature, Science, The Atlantic, Scientific American 等外刊同源精读\n"
    js_content += "// 每篇均配有：段落中英对照、意群语法切分 (Sense Group Chunking)、大纲生词交互式查词、考研真题命题解析\n"
    js_content += "window.READING_CORPUS = "
    js_content += json.dumps(all_articles, ensure_ascii=False, indent=2)
    js_content += ";\n"

    target_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "js", "reading-corpus.js")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\nWritten {len(all_articles)} articles to {target_path} successfully!")

if __name__ == "__main__":
    main()
