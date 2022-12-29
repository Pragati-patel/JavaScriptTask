// is given number power of 2 or not
// 2 4 8 16 32 64......
const input=64;
if(input%2===0){
    let check=1;
    while(true){
     check=check*2
     if(check===input)console.log(input, "is a power of 2")
     else if(check>input)break;
       }
}
else {console.log(input, "is not a power of 2 ")}