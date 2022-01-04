function getValues(){
    let startValue = Number(document.getElementById("startValue").value);
    let endValue = Number(document.getElementById("endValue").value);

    displayTable(startValue, endValue);
}

function displayTable(startValue, endValue){
    let templateRows = "";
    let Fizz="Fizz";
    let Buzz="Buzz";
    for(i=startValue; i<=endValue; i++){
        if (i%3==0 && i%5==0){
            templateRows+=`<tr><td>${Fizz} ${Buzz}</tr></td>`;
        }
        else if (i%3==0){
            templateRows+=`<tr><td>${Fizz}</tr></td>`;
        }
        else if (i%5==0){
            templateRows+=`<tr><td>${Buzz}</tr></td>`;
        }
        else{
            templateRows+=`<tr><td>${i}</tr></td>`;
        }
        
    }
    document.getElementById("results").innerHTML = templateRows;
}