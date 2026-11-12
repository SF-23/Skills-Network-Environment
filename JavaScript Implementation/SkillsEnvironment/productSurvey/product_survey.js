function submitFeedback()
{
    //grabs the variables using their id and stores inside local variables
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const uxFeedback = document.getElementById('userExperience').value;
    
    alert("Thank you for your feedback!");

    //prints the local variables that was captured from the input
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('uxFeedback').innerHTML = uxFeedback;
    
    document.getElementById('userInfo').style.display = 'block';
}

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event)  //uses .addEventListener('keydown'...) function 
{
    if(event.key === 'Enter') //after === input the key code you want to listen to
    {
        submitFeedback();
    }
})
