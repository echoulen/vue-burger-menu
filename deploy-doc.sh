#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git config user.email echoulen@gmail.com
git add -A
git commit -m 'deploy docs'

git push -f git@github.com:echoulen/vue-burger-menu.git master:gh-pages

cd -
