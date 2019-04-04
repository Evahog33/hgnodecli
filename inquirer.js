const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'author',
        message: '请输入作者名称'
    }
]).then((answers) => {
    console.log(answers.author);
})