#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addMore = await inquirer.prompt([
        {
            name: "todoList",
            type: "input",
            message: "What you want put in your todo list",
        },
        {
            name: "putMore",
            type: "confirm",
            message: "Do you confirm that you want to put more in your todo list ?",
            default: "true",
        },
    ]);
    todos.push(addMore.todoList);
    condition = addMore.putMore;
    console.log(todos);
}
;
