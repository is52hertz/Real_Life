@echo off

echo ��ѡ��ִ�е�ѡ�
echo "1. ����Ŀ¼ - OptFine"
echo "2. ����Ŀ¼ - Element"
echo "3. ����Ŀ¼ - OptFine & Element"
echo "4. ����Ŀ¼ - OptFine & Element & Server"
echo "3->client , 4->server"
echo.

set /p userOption=������ѡ�1, 2, 3 �� 4����

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

echo �Ƿ�ɾ�����ƶ����ļ�? (Y/N)
set /p deleteOption=

if "%deleteOption%"=="Y" del /Q "%CD%\add-mod\*.jar"
if "%deleteOption%"=="N" pause
if "%deleteOption%"=="y" del /Q "%CD%\add-mod\*.jar"
if "%deleteOption%"=="n" pause
