# 查看git代码提交行数



### 查看当前用户一定时间内提交代码行数（不加时间则为全部提交时间段内的统计）

```bash
git log --author="$(git config --get user.name)" --since="2021-06-20" --before="2022-12-12" --pretty=tformat: --numstat | awk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'
```



### 查看指定用户代码提交行数

```bash
git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'
```



### 查看当前项目git提交前5名

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```



### 提交次数统计

```bash
git log --oneline | wc -l
```

