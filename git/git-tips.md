# git-tips

## how to count commit
```
git rev-list --all --count

git rev-list --count [commit-hash]..HEAD (not include the commit begin)
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

## binary search git log
```
git bisect start
git bisect good [good commit]
git bisect bad [bad commit]
git bisect reset
```
[link](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E4%BD%BF%E7%94%A8-Git-%E8%B0%83%E8%AF%95)