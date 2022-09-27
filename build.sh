#!/bin/bash
function exit_script() {                                                      
    echo "脚本已退出"
    exit 1                                                                    
}     
read -p "请输入打包分支名称: " branchName
mainBranch="${branchName}"
git checkout $mainBranch
rm -rf dist
npm run build


