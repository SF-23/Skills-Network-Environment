let length;
let width;

function calculateArea()
{
    length = parseFloat(document.getElementById('length').value);   //gets the input value from html, from string -> floating number
    width = parseFloat(document.getElementById('width').value);
    
    let area = length * width;
    
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`; //prints the result at wherever id = "result" is called
    //.innerText - used to modify the text content within that HTML element
}