import inquirer from "inquirer";

let todos: string[] = [];
let loop = true

while(loop){
    const answers: {
        TODO : string,
        addmore : boolean
    }= await inquirer.prompt([
        {
            type : "input",
            name: "TODO",
            message: "what do you want to add in your todo?"
        },
        {
            type: "confirm",
            name : "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ])
    const {TODO, addmore} = answers;
    console.log(answers);
    
    loop = addmore
    if(TODO){
        todos.push;{TODO}
    }else{
        console.log("Kindly add valid input");
        
    } 
}
if(todos.length > 0){
    console.log("Your todo list \n");
    
   todos.forEach(TODO => {
    console.log(TODO);
    
   });
} else {
    console.log("no todos found");
    
}


console.log(todos);
