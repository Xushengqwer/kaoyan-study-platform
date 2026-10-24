"""
研途宝 · 文章自动化切分与意群断句格式化辅助脚本
用法：
  直接运行本脚本：python scripts/import_article_helper.py
  按照提示粘贴英文文章，脚本将自动完成段落切分、意群断句并生成标准 JS 代码！
"""

import re
import json

def generate_chunks(en_text):
    """智能意群断句切分"""
    processed = en_text
    processed = re.sub(r'([,;:—])', r'\1 / ', processed)
    processed = re.sub(r'\b(that|which|who|whom|whose|where|when|why|because|although|though|while|whereas|whether|if)\b', r' / \1', processed, flags=re.IGNORECASE)
    processed = re.sub(r'\b(in order to|according to|in the wake of|with regard to|as well as)\b', r' / \1', processed, flags=re.IGNORECASE)
    processed = re.sub(r'\s+/\s+', ' / ', processed)
    return processed.strip()

def main():
    print("=" * 60)
    print("  研途宝 · 考研真题与外刊长文格式化辅助工具")
    print("=" * 60)
    
    title = input("请输入文章标题 (例如: 2024年 英语一 Text 2): ").strip() or "考研精读文章"
    source = input("请输入文章来源 (例如: 2024 考研真题 / The Economist): ").strip() or "考研真题"
    topic = input("请输入主题分类 (例如: 经济与商业 / 科技与AI): ").strip() or "学术综合"
    
    print("\n请粘贴英文原文 (输入完毕后，输入包含 'EOF' 的单独一行并按回车结束)：")
    en_lines = []
    while True:
        line = input()
        if line.strip() == "EOF":
            break
        en_lines.append(line)
    
    en_full = "\n".join(en_lines)
    raw_paras = [p.strip() for p in re.split(r'\n\s*\n', en_full) if p.strip()]
    
    print(f"\n成功解析出 {len(raw_paras)} 个自然段。")
    
    formatted_paras = []
    for idx, p in enumerate(raw_paras, 1):
        formatted_paras.append({
            "paraNum": idx,
            "en": p,
            "zh": "",
            "chunks": generate_chunks(p)
        })
    
    article_obj = {
        "id": f"rc-{re.sub(r'[^a-zA-Z0-9]', '', title)[:15].lower()}-{idx}",
        "year": "最新",
        "examType": "真题精读",
        "section": "Text",
        "title": title,
        "source": source,
        "topic": topic,
        "difficulty": "4",
        "wordCount": len(en_full.split()),
        "summary": "考研真题精选阅读长文，支持意群断句与划词查词。",
        "paragraphs": formatted_paras,
        "questions": []
    }
    
    print("\n" + "=" * 60)
    print("已成功生成符合规范的 JavaScript 数据对象，可直接复制粘贴到 js/reading-corpus.js 中：")
    print("=" * 60)
    print(json.dumps(article_obj, ensure_ascii=False, indent=2) + ",\n")

if __name__ == "__main__":
    main()
