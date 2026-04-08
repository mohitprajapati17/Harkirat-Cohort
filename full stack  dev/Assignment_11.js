const check=(x)=>{
    let ans=[];
    for(let i=0;i<x.length;i++){
         if(x[i].age>18){
            ans.push(x[i]);
         }
    }
    return ans;
}

const users=check([{name:"John",age:20},{name:"Jane",age:17},{name:"Bob",age:25}]);
console.log(users);


