#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m 'new Deployment'
git push git@github.com:khuq/site-irfan-vue.git master:gh-pages

cd -