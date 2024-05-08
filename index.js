import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstnum",
        type: "number",
        message: "Please enter your first number: "
    },
    {
        name: "Secondnum",
        type: "number",
        message: "Please enter your second number: "
    },
    {
        name: "operator",
        type: "list",
        message: "Select one of operator to perfome operation",
        choices: ["+", "-", "/", "*"]
    }
]);
// Conditional statement
if (answer.operator === "+") {
    console.log(`The answer of Addition is : ${answer.firstnum + answer.Secondnum}`);
}
else if (answer.operator === "-") {
    console.log(`The answer of Subtraction is : ${answer.firstnum - answer.Secondnum}`);
}
else if (answer.operator === "*") {
    console.log(`The answer of Multiplition is : ${answer.firstnum * answer.Secondnum}`);
}
else if (answer.operator === "/") {
    console.log(`The answer of Division is : ${(answer.firstnum / answer.Secondnum).toFixed(4)}`);
}
else {
    console.log("Please select the valid operator");
}
