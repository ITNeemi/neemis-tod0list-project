import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add your todos?"
        },
        {
            name: "SecondQuestion",
            type: "confirm",
            message: "what would you like to add more in you todos?",
            default: "true"
        },
        {
            name: "Desert",
            type: "confirm",
            message: ["Dahi bary", "Labe Shereen", "Mis Kheer", "Dood Dalary"],
            default: "true",
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    condition = todoquestions.SecondQuestion;
}
