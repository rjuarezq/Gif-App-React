#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build-docs

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>n
git push -f github.com/rjuarezq/Gif-App-React.git main:gh-pages

cd -