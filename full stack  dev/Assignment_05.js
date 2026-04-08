const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Please enter a number: ', (n) => {
  const num = parseInt(n);
  
  if(num % 2){
    console.log("odd");
  } else {
    console.log("even");
  }
  
  readline.close();
});




