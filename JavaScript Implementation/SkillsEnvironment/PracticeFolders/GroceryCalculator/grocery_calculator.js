let grocery1Value;
let grocery2Value;
let grocery3Value;

function calculateTotal()
{
    grocery1Value = parseInt(document.getElementById("grocery1").value);
    grocery2Value = parseInt(document.getElementById("grocery2").value);
    grocery3Value = parseInt(document.getElementById("grocery3").value);
    
    let total = grocery1Value + grocery2Value + grocery3Value;
    
    document.getElementById("total").innerText = `The total amount is: ${total}`;
}