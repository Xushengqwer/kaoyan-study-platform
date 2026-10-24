# 研途宝 本地 PowerShell 快速启动脚本
$Host.UI.RawUI.WindowTitle = "研途宝 · 本地服务器"
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  研途宝 (YanHub) · 考研英语与政治备考平台 本地服务" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

Write-Host "项目目录: $projectRoot" -ForegroundColor Gray
Write-Host "正在开启浏览器访问 http://localhost:8080 ..." -ForegroundColor Yellow
Start-Process "http://localhost:8080"

Write-Host "正在运行 Python HTTP 服务，按 Ctrl+C 可停止运行..." -ForegroundColor Green
python -m http.server 8080
