#git checkout --orphan gh-pages && rm -rf `ls -a | grep -vE '\.gitignore|\.git|node_modules|bower_components|(^[.]{1,2}$)'` && git add -u && git commit -m "initial gh-pages commit"
echo DIRTY HACK IS BAD
ember github-pages:commit --environment=gh-pages
git push origin gh-pages

