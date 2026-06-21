
const form = document.getElementById('feedback-form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const comments = document.getElementById('comments');

const charCount = document.getElementById('char-count');
const tooltip = document.getElementById('tooltip');
const validationMessage = document.getElementById('validation-message');
const feedbackDisplay = document.getElementById('feedback-display');

// Tooltip messages for each field
const tooltipMessages = {
    userName: 'Enter your full name',
    email: 'Enter a valid email address',
    comments: 'Enter your feedback here'
};

// Count characters as the user types in the comments box

comments.addEventListener('input', function() {
    charCount.textContent = `Characters: ${comments.value.length}`;
});

// Use event delegation for tooltips and field highlighting
form.addEventListener('mouseover', function(event) {
    if (event.target.matches('input, textarea')) {
        tooltip.textContent = tooltipMessages[event.target.id];
        event.target.style.backgroundColor = "#f0f8ff";
   
    }
});


form.addEventListener('mouseout', function(event) {
    if (event.target.matches('input, textarea')) {
        tooltip.textContent = '';
        event.target.style.backgroundColor = '';
    }
});

// Prevent clicks inside the form from bubbling to the page background
form.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Optional background click test only 

document.body.addEventListener('click', function() {
    console.log('Background clicked');
});

// Validate form and display feedback
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (
        userName.value.trim() === "" ||
        email.value.trim() === "" ||
        comments.value.trim() === ""
    ) {
        validationMessage.textContent = "Please fill out all fields before submission.";
        return; 
    }

validationMessage.textContent = "";

const feedbackEntry = document.createElement('div');
feedbackEntry.classList.add('feedback-entry');

const nameHeading = document.createElement('h3');
nameHeading.textContent = userName.value;

const emailParagraph = document.createElement('p');
emailParagraph.textContent = `Email: ${email.value}`;

const commentsParagraph = document.createElement('p');
commentsParagraph.textContent = `Feedback: ${comments.value}`;

feedbackEntry.appendChild(nameHeading);
feedbackEntry.appendChild(emailParagraph);
feedbackEntry.appendChild(commentsParagraph);

feedbackDisplay.appendChild(feedbackEntry);

form.reset();
charCount.textContent = "Characters: 0";
}); 

