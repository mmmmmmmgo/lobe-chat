const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob').sync;

// 定义要添加的字符串和src目录的路径
const lineToAdd = "'use client';\n";
const srcPath = path.join(__dirname, 'src');
// 使用glob查找所有的.tsx文件
const files= glob(`${srcPath}/**/*.tsx`);
// glob(`${srcPath}/**/*.tsx`, (err, files) => {
    console.log(13_123,files)


    files.forEach(file => {
        // 读取每个文件的内容
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${file}`, err);
                return;
            }

            // 检查文件是否已经包含'use client'
            if (data.startsWith(lineToAdd)) {
                console.log(`'use client' already added in ${file}`);
                return;
            }

            // 将'use client'添加到文件内容的开始
            const updatedData = lineToAdd + data;

            // 写回文件
            fs.writeFile(file, updatedData, 'utf8', err => {
                if (err) {
                    console.error(`Error writing file: ${file}`, err);
                } else {
                    console.log(`Updated file: ${file}`);
                }
            });
        });
    });
// });