document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const answer = document.getElementById("answer").value;

    if (answer.trim() === "") {
        alert("Please provide an answer.");
        return;
    }

    // Replace this URL with your actual Google Apps Script Web App URL
    fetch('Yhttps://script.google.com/macros/s/AKfycbwD-BRAghi09VkC6ll16ttcKvyO5BRYwCHdjSyK0_b1eBWagDyJOWi0aJlOSFB-Qf0-/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: answer }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Your answer has been submitted!");
        document.getElementById("surveyForm").reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("There was an error submitting your answer.");
    });
});
