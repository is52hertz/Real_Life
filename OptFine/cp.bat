del /S /Q d:\bugengyou\pcl2\.minecraft\versions\1.16.5-Forge_36.2.41\mods\*
move "%CD%\OptiFine_1.16.5_HD_U_G8.jar" "%CD%\OptiFine_1.16.5_HD_U_G8.jar.dis"
pause
copy /Y "..\own\OptiFine_1.16.5_HD_U_G8.jar" "%CD%\OptiFine_1.16.5_HD_U_G8.jar"
pause
xcopy /I /Y *.jar d:\bugengyou\pcl2\.minecraft\versions\1.16.5-Forge_36.2.41\mods\
pause
del /Q "%CD%\OptiFine_1.16.5_HD_U_G8.jar"
pause
move "%CD%\OptiFine_1.16.5_HD_U_G8.jar.dis" "%CD%\OptiFine_1.16.5_HD_U_G8.jar"
pause