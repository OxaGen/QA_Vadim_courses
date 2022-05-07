#!/bin/bash  
echo Привет! Это скрипт-домашка!
echo 3: Заходим в папку
cd /c/Terminal/Test1/Test8
ls
echo 4: Создаем папки внутри
mkdir Folder1 Folder2 Folder3
echo 5: Заходим в одну из папок
cd /c/Terminal/Test1/Test8/Folder1
echo 6: Создаем 5 файлов внутри
touch txtfiles{0001..0003}.txt jsonfiles{0001..0002}.json 
echo 7: Создаем еще три папки
mkdir Folder4 Folder5 Folder6
echo 8: Выводим содержимое папки
ls -la
echo 13: Передвигаем файлы в другую папку
mv txtfiles{0001..0002}.txt Folder4
echo Сделано
exit
