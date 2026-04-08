const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Please enter a number: ', (n) => {
  console.log(sumTon(parseInt(n)));
  readline.close();
});
let sumTon=function(x){
    let sum=0;
   for(let i=1;i<x;i++){
   sum+=i;
 }

 return sum;
}



