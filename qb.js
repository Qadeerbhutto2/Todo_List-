#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n\t wellcome to Mr legend code\n\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "add your new task please:",
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.more;
    console.log(`your updated Todo list ${todoList}`);
}
