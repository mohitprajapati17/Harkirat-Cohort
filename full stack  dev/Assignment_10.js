const num=(x)=>{
   let s=[];
   for(let i=0;i<x.length;i++){
    if(x[i]%2==0){
       s.push(x[i]);
    }
   }
   return s;
}

let n=num([1,2,3,4,5,6,7,8,9,10]);
console.log(n);