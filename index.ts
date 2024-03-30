#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000; // Dollar
let mypin = 9876;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);

if (pinAnswer.pin === mypin) {
    console.log(chalk.green("Correct pin code !!!"));

    console.log(chalk.white.bgMagenta("----------------welcome to Faysal ATM-------------"));

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices:["withdraw", "Check Balance", "Fast Cash","Exit"],
        },
    ]);

    if (operationAns.operation === "Withdraw") {
        let amountAns =await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount you want to withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.white.bgMagentaBright(`Your remaining balance is ${myBalance}`));
        
        } else {
            console.log(chalk.white.bgYellow("Insufficient balance")); 
}

}else if (operationAns.operation === "Check Balance") {
    console.log(chalk.white.bold.bgMagenta(`Your balance is: ${myBalance}`));
} else if (operationAns.operation === "Fast Cash") {
    let fastCashAnswers = await inquirer.prompt([
        {
            type: "list",
            name:"fast_amount",
            message: "select the amount you want to cash:",
            choices: [500, 1000, 4000],
        },
    ]);
    
    if (fastCashAnswers.fast_amount <= myBalance) {
        myBalance -= fastCashAnswers.fast_amount;
        console.log(chalk.whiteBright.bgMagentaBright(`Your remaining balance is ${myBalance}`));
    } else {
        console.log(chalk.yellow("Insufficient balance"));
    }
} else if (operationAns.operation === "Exit") {
    console.log(chalk.whiteBright.bgBlack("Thankyou for using Faysal ATM"));
} 
} else {
    console.log(chalk.whiteBright.bgYellow("Incorrect pin number"));
}