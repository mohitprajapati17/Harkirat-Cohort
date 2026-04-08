const greet =(user)=>{
    console.log("Hello " + user.name);
    if(user.age>=18){
         console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

greet({name:"Mohit", age:20});
