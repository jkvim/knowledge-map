# git-tips

## how to count commit
```
git rev-list --all --count
```
[link](https://stackoverflow.com/a/4061706)

## how to count commit by authors
```
git shortlog -s -n
```
[link](http://gitready.com/intermediate/2009/01/22/count-your-commits.html)

## how to rebase from first commit
```
git rebase -i --root
```
[link](https://stackoverflow.com/a/2309391)

## get current branch name
```
git rev-parse --abbrev-ref HEAD
```
[link](https://stackoverflow.com/a/12142066)

## list commit from certain commit
```
git rev-list <since_hash>..HEAD
```
[stackoverflow](https://stackoverflow.com/a/7693298)