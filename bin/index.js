#!/usr/bin/env node
var program = require('commander');
program
    .version('0.1.0')
    .option('-b, --baseinfo', '基本信息')
    .option('-e, --education', '教育经历')
    .option('-i, --itskill', 'IT技能')
    .option('-w, --work', '工作经验')
    .parse(process.argv);

program.on('--help', function () {
    console.log('  自定义的例子:')
});
if(program.baseinfo) {
    console.log('姓名:vichsnag');
    console.log('性别:男');
    console.log('爱好:女');
}
if(program.education){
    console.log('毕业院校:北京大学');
    console.log("专业：计算机软件应用")
}
if (!process.argv[2]) {
    program.help();
    console.log();
}




