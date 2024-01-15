interface User{
    userID:string|number
    userPin:number
    accountType:string
    TransectionType:string
    amount:number
}
import inquirer from "inquirer";
async function atm(){
    console.log("*WELCOME TO MY BANK*")

const user:User =await inquirer.prompt([
    {
        type:"input",
        name: "userID",
        message:"Kinldy enter your ID"
    },{
        type:"number",
        name: "userPin",
        message:"Enter the Pin"
    },{
        type:"list",
        name: "accountType",
        choices:["Current","Saving"],
        message:"Select the account type"
    },{
        type:"list",
        name: "TransectionType",
        choices:["Fast Cash","Cash Withdraw"],
        message:"Seclect transection type"
    },{
        type:"list",
        name: "amount",
        choices:[1000,1500,2000,3000,5000],
        message:"Seclect the amount",
        when(user){
            return user.TransectionType === "Fast Cash"; 
        }
    },{
        type:"number",
        name: "amount",
        message:"Enter the amount",
        when(user){
            return user.TransectionType === "Cash Withdraw"; 
        }
    }
])
if(user.userID && user.userPin){
    const balance = Math.floor(Math.random()*300000)
    console.log("Current Balance PKR="+balance.toLocaleString());
    const enterAmount = user.amount
    if(enterAmount <= balance){
        const remaining = balance - enterAmount
        console.log(`${enterAmount} Cash Withdraw Successfull....\n Your Remaining Balance is PKR= ${remaining.toLocaleString()}`)
    }else{
        console.log("Insufficient balance \n try again with lower amount")
    } 
}}
atm();









































































