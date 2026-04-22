const check=(x)=>{
    let ans=[];
    for(let i=0;i<x.length;i++){
         if(x[i].age>18&&x[i].gender==="male"){
            ans.push(x[i]);
         }
    }
    return ans;
}

const users=check([{name:"John",age:20,gender:"male"},{name:"Jane",age:19,gender:"female"},{name:"Bob",age:25,gender:"male"}]);
console.log(users);


