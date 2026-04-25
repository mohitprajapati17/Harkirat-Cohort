// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

let flag=false;
function once(fn) {
     let called =false;
     let result ,error;

     return (...args)=>{
        const  callback  =args.pop();
        if(called){
            callback(error,result);
            return;
        }
        called=true;
        fn(...args,(err,res)=>{
            error=err;
            result=res;
            callback(error,result);
        })
        
     }
}

module.exports = once;