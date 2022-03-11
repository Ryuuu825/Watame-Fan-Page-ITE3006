# TO PULL A REQUEST TO UPDATE THE CODEBASE

https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/1-getting-started-lessons/2-github-basics/README.md

## DON'T PUSH TO MASTER BRANCH

> TYPE THOSE COMMAND

- git checkout -b {newbranch}
- git add .
- git commit -m {message}
- git push --set-upstream origin {your new branch}

## TO MERGE MASTER BRANCH TO YOUR BRANCH

- git fetch origin
- git checkout {newbranch}
- git merge master

## GET THE UPDATE BEFORE WORK

- git pull
