#!/bin/bash
function exit_script() {                                                      
    echo "脚本已退出"
    exit 1                                                                    
}     
read -p "请输入分支主分支名称不包含_main: " branchName
allBranch=$(git branch --all | grep ${branchName})
main="_main"
mainBranch="${branchName}${main}"
echo "搜索的所有分支名称-> "$allBranch
OLD_IFS="$IFS"
arr=($allBranch)
IFS="$OLD_IFS"
git checkout $mainBranch
hasCehckSucces="$(git checkout $mainBranch)"
succesStatus="M test.sh"
if currentBranch=$(git symbolic-ref --short -q HEAD)
then
  if [ $currentBranch = $mainBranch ]
  then
    echo "切换到主分支-> ${mainBranch}"
  else
    echo "主分支切换失败"
    exit_script
  fi
  git pull
  echo "拉取最新主分支-> $mainBranch"
  for s in ${arr[@]}
  do
      if [ $s != ${mainBranch} ]
      then
        git merge $s
        echo $s"->合并完成"
      fi
  done
  echo '合并结束'
else
  echo not on any branch
fi
