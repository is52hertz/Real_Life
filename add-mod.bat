@echo off

echo 请选择执行的选项：
echo "1. 放入目录 - OptFine"
echo "2. 放入目录 - Element"
echo "3. 放入目录 - OptFine & Element"
echo "4. 放入目录 - OptFine & Element & Server"
echo "3->client , 4->server"
echo.

set /p userOption=请输入选项（1, 2, 3 或 4）：

if "%userOption%"=="1" (
  copy /Y "%CD%\add-mod\*.jar" "%CD%\OptFine\"
)

if "%userOption%"=="2" (
  copy /Y "%CD%\add-mod\*.jar" "%CD%\Element\"
)

if "%userOption%"=="3" (
  copy /Y "%CD%\add-mod\*.jar" "%CD%\Element\"
  copy /Y "%CD%\add-mod\*.jar" "%CD%\OptFine\"
)

if "%userOption%"=="4" (
  copy /Y "%CD%\add-mod\*.jar" "%CD%\Element\"
  copy /Y "%CD%\add-mod\*.jar" "%CD%\OptFine\"
  copy /Y "%CD%\add-mod\*.jar" "%CD%\Server\"
)

echo 是否删除已移动的文件? (Y/N)
set /p deleteOption=

if "%deleteOption%"=="Y" del /Q "%CD%\add-mod\*.jar"
if "%deleteOption%"=="N" pause
if "%deleteOption%"=="y" del /Q "%CD%\add-mod\*.jar"
if "%deleteOption%"=="n" pause
