var firstNum = document.querySelector('.first-number');
var secondNum = document.querySelector('.second-number');
var finalNum = document.querySelector('.final-number');
var finalnumResult;
var firstentNum = window.prompt();
var secondentNum = window.prompt();

firstNum.textContent = firstentNum;
secondNum.textContent = secondentNum;

if(firstentNum > secondentNum){
    finalnumResult = firstentNum - secondentNum;
}else{
    finalnumResult = secondentNum - firstentNum;
}

finalNum.textContent = finalnumResult;
