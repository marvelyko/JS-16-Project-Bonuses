const x = 10;
console.log(x);

function number () {
    const x = 20;
    if(true){
         const x = 30;
        console.log('internal ' + x)
    }
    console.log('middle ' +x);
}
console.log('global ' + x)
number(0);
