# 研途宝 (YanHub) · 考研英语 & 考研政治全景备战平台

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.x-emerald.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8.svg)
![Status](https://img.shields.io/badge/Deployment-GitHub%20Pages-success.svg)

**专为全国硕士研究生招生考试（考研公共课：考研英语、考研政治）打造的现代化一体化智能备战系统。**

[在线极速访问 (Live Demo)](https://xushengqwer.github.io/kaoyan-study-platform/) · [项目架构文档](docs/ARCHITECTURE.md) · [题库扩展规范](docs/DATA_SPEC.md) · [日常维护指南](docs/MAINTENANCE.md)

</div>

---

## 🌟 核心特色与功能矩阵

### 🇬🇧 考研英语模块 (English Hub)
1. **大纲 5,530 完整词库 (Unit 单元刷词 + 真实真题频次统计)**
   - 全量收录考研英语大纲 5,530 个词汇，无删减。
   - 标注历年考研真题考查次数（如 `真题 32 次`），按词频从高到低科学排布。
   - 划分 **Unit 1 ~ Unit 111**（每单元 50 词），支持全局即搜即显与真人发音（Web Speech API）。
2. **真题阅读全文精读实验室 (意群断句 + 划词即查字典 + 50篇大库)**
   - **50 篇权威精读文库**：全量收录 2015-2024 考研真题（英语一/二）与权威同源外刊（*The Economist, The Atlantic, Scientific American, Nature, HBR, Wired*）等 50 篇精选长文。
   - **题材分类筛选与关键词快搜**：支持按“科技与数字、社会与职场、经济与商业、生态与环境、医疗与健康、教育与科研、法律与伦理、文化与艺术”快速筛选，支持“上一篇/下一篇”无缝翻页。
   - **智能意群断句模式 (Sense Group Chunking)**：长句自动按语法意群切分为独立块（用 `/` 隔开），彻底训练不回读、一眼抓主干的断句能力。
   - **大纲生词智能标记与划词即查**：文章中大纲核心词自动高亮标注；**点击任何单词**瞬间唤起大纲考频与释义浮窗，支持一键沉淀至生词本。
   - **双语精读对照 & 真题题测**：段落逐段中英对照，文末配套考研真题客观题互动判分与名师解析。
   - **自定义文章导入工坊**：支持一键导入任意真题长文或外刊长文，自动分段排版并生成意群断句，文章库无限扩充！
3. **高分写作语料库**
   - 12 组高阶学术闪光替换词库（含例句）。
   - 小作文（建议信/告示）与大作文（英语一图画三段论/英语二图表走势）黄金通用框架，一键复制。

---

### 🇨🇳 考研政治模块 (Politics Hub)
1. **全科真题与模拟题客观题题库**
   - 覆盖马原（哲学、政经、科社）、毛中特与新时代思想、中国近现代史纲要、思修与法基四大科目。
   - 单选题选后即判；多选题（提分关键）支持防错防漏多选提交机制。
   - 每题均配备 **【考点溯源】**、**【名师详解】** 与 **【高频命题陷阱预警】**，做错题目自动录入个人错题本。
2. **四大科目考点全书 (Systematic Encyclopedia)**
   - 马原辩证法三大规律五对范畴、认识论两次飞跃、习近平新时代思想核心框架、中共党史重要会议脉络等系统化大纲。
   - 支持全局考点关键词毫秒级搜索。
3. **3D 翻转考点速记卡片 (Active Recall Flashcards)**
   - 交互式 3D 翻转卡片，涵盖核心命题知识脉络与计算公式。
4. **主观大题（34-37题）满分 10 分采分公式库**
   - 马原分析题“三步走采分法”、毛中特/史纲/思修答题框架与万能论述金句。

---

### 📊 综合备考仪表盘
- **考研倒计时仪表盘**：动态计算距离今年12月初试剩余天数。
- **每日打卡系统**：激励自律备考打卡与连续天数统计。
- **本地持久化存储**：做题进度、错题本、生词本与导入文章均保存在浏览器本地存储中，安全不丢失。

---

## 📁 规范项目工程目录结构

```text
kaoyan-study-platform/
├── .gitignore                   # Git 忽略文件配置
├── .nojekyll                    # 绕过 Jekyll 编译，保障静态文件极速分发
├── LICENSE                      # MIT 开源许可证
├── README.md                    # 项目主说明文档
├── index.html                   # 单页应用 (SPA) 主入口与全局视图
├── css/
│   └── styles.css               # 3D 翻转、意群断句、高亮划词与玻璃拟态样式
├── js/
│   ├── app.js                   # Vue 3 应用主控制器、状态管理与查词引擎
│   ├── kaoyan-vocab-5500.js     # 考研大纲 5,530 完整词库 (带历年真题频次)
│   ├── reading-corpus.js        # 历年真题阅读全文精读文库 (带意群断句与题测)
│   ├── english-data.js          # 核心词汇卡片、长难句拆解与写作黄金模板
│   └── politics-data.js         # 政治全科题库、考点全书与主观题模板
├── docs/                        # 项目全套工程与维护设计文档
│   ├── ARCHITECTURE.md          # 软件系统架构与技术设计
│   ├── DATA_SPEC.md             # 题库与词库数据格式扩充规范 (维护必读)
│   ├── MAINTENANCE.md           # 本地调试、GitHub 提交与发布操作指南
│   └── ROADMAP.md               # 项目演进与后续功能规划路线图
└── scripts/                     # 运维辅助与本地开发工具脚本
    ├── start-local.bat          # Windows 一键双击本地启动脚本
    ├── start-local.ps1          # PowerShell 本地启动脚本
    └── import_article_helper.py # 文章自动分段与意群断句格式化辅助工具
```

---

## 🚀 本地快速启动运行

### 方式 1：双击批处理脚本 (Windows 最快)
直接双击运行项目根目录下的脚本：
`scripts/start-local.bat`
系统将自动启动轻量 Web 服务器并在默认浏览器打开 `http://localhost:8080`！

### 方式 2：使用 Python 原生命令
```bash
# 1. 切换至项目根目录
cd "C:\Users\许志火\.gemini\antigravity\scratch\kaoyan-study-platform"

# 2. 启动静态服务器
python -m http.server 8080
```
浏览器打开：**http://localhost:8080**

---

## 🛠️ 后续项目维护与开发指南

1. **扩充真题阅读文章**：参考 [docs/DATA_SPEC.md](docs/DATA_SPEC.md)，将格式化后的段落放入 `js/reading-corpus.js`，或在网页上使用“导入文章”工坊。
2. **扩充政治试题**：在 `js/politics-data.js` 中追加单选或多选数据对象。
3. **推送到 GitHub 自动发布**：
   ```bash
   git add .
   git commit -m "feat: update study content"
   git push
   ```
   GitHub Actions 会在 30 秒内自动编译并推送到线上 [GitHub Pages](https://xushengqwer.github.io/kaoyan-study-platform/)。

---

## 📄 开源许可证

本项目基于 [MIT 许可证](LICENSE) 开源。欢迎广大考研学子学习、维护与二次定制！
