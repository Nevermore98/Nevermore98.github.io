#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送至 github
git push -u origin main

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git branch -m main
git commit -m 'deploy'

# 推送至服务器，注意是 main 分支
git remote add origin git@175.178.127.246:/home/www/website/blog.git
git push -f git@175.178.127.246:/home/www/website/blog.git main

cd -