var multi = document.getElementById("multi");

var num1 = prompt("Enter the multiplied number, (operations from 1 to the entered number will be printed) : ");
var num2 = prompt("Enter the number to which you want to complete the operation ex(10) : ");

for(var i=1; i<=num1; i++){
    multi.innerHTML += ` <h2> Mutliplication of ${i} <h2> <br>`;
    for(var j=1; j<=num2 ; j++){
        multi.innerHTML += ` ${i}×${j} = ${i*j} <br>`;
    }
    multi.innerHTML += "<hr>";
}