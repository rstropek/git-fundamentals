# Workflow for Merge Conflict Demo

```bash
code mycode.js
git add .
git commit -m 'Basic math'

git checkout -b mult
code mycode.js
git add .
git commit -m 'Switch to mult'

git checkout master
git checkout -b add
code mycode.js
git add .
git commit -m 'Switch to add'

git checkout master
git merge mult
git diff HEAD~1 HEAD

git merge add
git status
cat mycode.js
code mycode.js
git add mycode.js
git commit -m 'Fix merge conflict, add is correct'

git status
```
