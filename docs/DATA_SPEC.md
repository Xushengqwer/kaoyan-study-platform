# 研途宝 (YanHub) · 题库与数据格式扩充规范 (Data Specification)

为了方便后续维护、持续扩充历年考研真题与外刊长文，本文档规范了平台各大数据库的数据结构与字段定义。您可以随时通过修改对应的 JavaScript 文件，扩充真题内容。

---

## 目录与文件对应关系

| 文件路径 | 对应功能模块 | 变量名 |
| :--- | :--- | :--- |
| `js/reading-corpus.js` | 历年真题阅读全文精读库 | `window.READING_CORPUS` |
| `js/kaoyan-vocab-5500.js` | 考研英语大纲 5530 完整词库 | `window.KAOYAN_FULL_VOCAB` |
| `js/english-data.js` | 考研核心词汇卡片、长难句、写作模板 | `window.ENGLISH_DATA` |
| `js/politics-data.js` | 考研政治题库、考点全书、速记卡、大题模板 | `window.POLITICS_DATA` |

---

## 一、 真题阅读文章数据结构 (`js/reading-corpus.js`)

向阅读库中添加新文章时，请在 `window.READING_CORPUS` 数组中添加一个对象：

```javascript
{
  id: "rc-2024-text1",                      // 唯一ID，建议格式 rc-年份-篇章
  year: "2024",                             // 考研年份
  examType: "英语一",                       // 英语一 或 英语二
  section: "Text 1",                        // 篇章编号 (Text 1~4)
  title: "文章中文标题/主旨",               // 简短标题
  source: "2024年 考研英语一 阅读理解 Text 1", // 出处
  topic: "科技前沿与人工智能",              // 题材分类
  difficulty: "4",                          // 难度等级 (1~5)
  wordCount: 420,                           // 英文词数估算
  summary: "一句话概括文章核心论述观点...", // 摘要
  paragraphs: [
    {
      paraNum: 1,                          // 自然段序号 (1, 2, 3...)
      en: "Paragraph English content...",   // 英文正文
      zh: "段落中文权威参考译文...",        // 中文译文
      chunks: "Paragraph English / content / broken into / sense groups..." // (可选) 手动意群切分，用 " / " 隔开；若留空系统将自动切分
    }
    // 依此类推...
  ],
  questions: [
    {
      id: "q-2024-1",                       // 题目唯一ID
      question: "According to Paragraph 1, the phenomenon is driven by...",
      options: [
        { label: "A", text: "选项A文字" },
        { label: "B", text: "选项B文字" },
        { label: "C", text: "选项C文字" },
        { label: "D", text: "选项D文字" }
      ],
      answer: "B",                          // 正确答案: A / B / C / D
      analysis: "【名师解析】定位在第1段第2句，B项与原文形成同义替换..." // 解题思路与陷阱警示
    }
  ]
}
```

---

## 二、 考研政治客观题数据结构 (`js/politics-data.js`)

向政治题库添加试题时，请在 `window.POLITICS_DATA.questions` 中添加：

### 1. 单选题格式：
```javascript
{
  id: "pol-q-101",                          // 唯一编号
  subject: "马原",                          // 科目：马原 / 毛中特与新时代 / 史纲 / 思修法基
  type: "single",                           // 单选题填写 "single"
  badge: "唯物辩证法核心",                  // 考点徽章
  question: "题干文字描述...",
  options: [
    { label: "A", text: "选项A" },
    { label: "B", text: "选项B" },
    { label: "C", text: "选项C" },
    { label: "D", text: "选项D" }
  ],
  answer: "A",                              // 正确答案 (字母)
  analysis: "【考点溯源】...【名师详解】...", // 权威考点解析
  trap: "【高频陷阱警示】注意区分选项中的绝对化表述..." // 避坑提示
}
```

### 2. 多选题格式：
```javascript
{
  id: "pol-q-102",
  subject: "毛中特与新时代",
  type: "multiple",                         // 多选题填写 "multiple"
  badge: "中国式现代化本质要求",
  question: "题干文字描述...",
  options: [
    { label: "A", text: "选项A" },
    { label: "B", text: "选项B" },
    { label: "C", text: "选项C" },
    { label: "D", text: "选项D" }
  ],
  answer: ["A", "B", "C"],                  // 正确答案为数组形式
  analysis: "【名师详解】ABC正确，D项错误因为...",
  trap: "【陷阱提醒】注意混淆主体与客体的命题陷阱。"
}
```

---

## 三、 考点速记卡片数据结构 (`js/politics-data.js`)

向 3D 翻转卡片库中添加卡片：

```javascript
{
  id: "fc-101",
  subject: "马原",
  chapter: "唯物论",
  title: "物质与意识辩证关系",
  front: "卡片正面问题：如何正确理解物质决定意识与意识能动作用的关系？",
  back: "卡片背面详细考点采分清单：\n①物质决定意识...\n②意识对物质具有反作用...\n③方法论启示..."
}
```
