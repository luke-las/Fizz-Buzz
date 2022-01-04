function getValues(){
    let startValue = Number(document.getElementById("startValue").value);
    let endValue = Number(document.getElementById("endValue").value);

    displayTable(startValue, endValue);
}

function displayTable(startValue, endValue){
    let templateRows = "<tr>";
    let rowTicker=0;
    let Fizz="Fizz";
    let Buzz="Buzz";
    
    for(i=startValue; i<=endValue; i++){
        rowTicker+=1;
        if (i%3==0 && i%5==0){
            templateRows+=`<td>${Fizz} ${Buzz}</td>`;
        }
        else if (i%3==0){
            templateRows+=`<td>${Fizz}</td>`;
        }
        else if (i%5==0){
            templateRows+=`<td>${Buzz}</td>`;
        }
        else{
            templateRows+=`<td>${i}</td>`;
        }

        if (rowTicker==5)
        {
            templateRows+=`</tr>`
            rowTicker=0;
        }

        
    }
    document.getElementById("results").innerHTML = templateRows;
}