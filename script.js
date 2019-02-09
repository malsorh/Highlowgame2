// JavaScript File

console.log('hello')

let targetNum; 

targetNum = Math.floor((Math.random() * 100) + 1);
let resultDisplay=document.getElementById('result')

function CheckNum(){
    let guess =parseInt(document.getElementById('number').value);
     setTimeout(function(){resultDisplay.innerHTML='Times UP!'; }, 20000);
    if(guess==null){
        return;
    }
    else if(guess==targetNum){
    resultDisplay.style.color ="#4BB543"
    resultDisplay.innerHTML='you got it!'
    
}
    

    else if(guess>targetNum){
         resultDisplay.style.color ="#d9534f"
        resultDisplay.innerHTML='too high';
} 
    else{
         resultDisplay.style.color ="#d9534f"
        resultDisplay.innerHTML='too low';
    }
}







 
