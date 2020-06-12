# Contributing

This is the porcess of contributing to EZ-LFG

## Steps

Make sure to have small and focus PRs

1. branch out from master `git checkout -b <first name>/<Title of the branch>` NOTE: make sure you are on master. If not `git checkout -b <first name>/<Title of the branch> origin/master`
2. work on the the branch
3. `git add --all`
4. `git commit` Make sure to have a clear commit message
5. If needed `git rebase -i HEAD~2` NOTE: the `2` is the commits that you want to squash.
6. sync with master `git pull origin master --rebase`
7. If needed: resolve conflicts.
8. Push the branch to remove `git push origin <first name>/<Title of the branch>`

## PR Title

`<type>/message`
types-
[`build`, `chore`, `docs`, `feat`, `fix`, `perf`, `refactor`, `style`, `test`, `revert`, `ci`]
Message-
single line description

## HTML Semantics Elements

Make sure to use semantic elements.
https://www.w3schools.com/html/html5_semantic_elements.asp

## PR review

2 peer reviews are required before merge.
