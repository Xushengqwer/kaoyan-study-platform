# 研途宝 (YanHub) · 项目日常维护与部署操作手册

本文档提供项目的全流程维护操作指南，指导您如何启动本地开发、修改与验证代码、一键同步更新至 GitHub 以及部署上线。

---

## 一、 本地启动与调试

### 方式 1：双击执行批处理脚本 (推荐)
直接进入项目根目录下的 `scripts` 文件夹，双击运行：
`scripts/start-local.bat`
系统会自动启动 Python 本地 Web 服务器并自动在浏览器中打开：
👉 **http://localhost:8080**

### 方式 2：使用命令行启动
在 PowerShell 或 CMD 中进入项目根目录：
```powershell
cd "C:\Users\许志火\.gemini\antigravity\scratch\kaoyan-study-platform"
python -m http.server 8080
```
然后在浏览器访问：`http://localhost:8080`。

---

## 二、 内容修改与更新流程

当您修改了词库、扩充了真题文章或调整了界面布局后，按以下三步提交更新：

### 1. 验证 JavaScript 语法 (防止拼写错误)
在终端运行 Node.js 语法校验：
```powershell
node -c "js/app.js"
node -c "js/reading-corpus.js"
node -c "js/politics-data.js"
```
若没有任何报错输出，说明代码语法 100% 正确。

### 2. 本地刷新验证
在浏览器中按 **`Ctrl + F5`**（强制清除缓存并刷新），确认新增内容显示正常。

### 3. 一键推送到 GitHub
在项目根目录下执行以下三行标准 Git 命令：
```powershell
git add .
git commit -m "feat: update reading articles and question bank"
git push
```

---

## 三、 GitHub Pages 自动化发布监控

1. 代码推送到 GitHub 的 `main` 分支后，GitHub Actions 会在后台**自动触发**部署流水线（`pages-build-deployment`）。
2. 查看部署状态：
   👉 [https://github.com/Xushengqwer/kaoyan-study-platform/actions](https://github.com/Xushengqwer/kaoyan-study-platform/actions)
3. 状态变为绿色对勾 ✔️ 后（通常耗时约 30 ~ 60 秒），在线网站即自动更新完毕：
   🔗 **[https://xushengqwer.github.io/kaoyan-study-platform/](https://xushengqwer.github.io/kaoyan-study-platform/)**

> **💡 浏览器缓存提示**：如果线上访问没有立即看到更新，这是由于浏览器对静态 JS 文件有本地缓存，只需在网页上按 **`Ctrl + F5`** 强制刷新，或者在手机端微信/浏览器中清理一下临时缓存即可！

---

## 四、 本地用户数据说明与重置

- **存储机制**：用户的学习打卡记录、背词进度、错题本与自定义导入的文章均存储在浏览器的 `localStorage` 中（键名：`YAN_HUB_USER_DATA_V3` 与 `YAN_HUB_CUSTOM_ARTICLES`）。
- **数据安全**：正常刷新、关闭浏览器均不会导致做题数据丢失。
- **重置数据**：若需要重新开始新一轮刷题，直接在平台首页仪表盘底部点击 **“重置学习记录”** 按钮即可。
