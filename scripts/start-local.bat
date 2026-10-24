@echo off
chcp 65001 >nul
echo ========================================================
echo   研途宝 (YanHub) · 考研双核备考平台 本地服务启动器
echo ========================================================
echo.
echo [1/2] 正在切换至项目根目录...
cd /d "%~dp0\.."

echo [2/2] 正在启动本地 Web 服务器 (端口 8080)...
start http://localhost:8080
python -m http.server 8080

pause
