
const form = document.getElementById('feedback-form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const comments = document.getElementById('comments');

const charCount = document.getElementById('char-count');
const tooltip = document.getElementById('tooltip');
const validationMessage = document.getElementById('validation-message');
const feedbackDisplay = document.getElementById('feedback-display');

// Count characters as user types

comments.addEventListener('input', function() {
    charCount.textContent = `Characters: ${comments.value.length}`;
});

// Show tooltips
userName.addEventListener('mouseover', function() {
    tooltip.textContent = 'Enter your full name';
});

email.addEventListener("mouseover", function() {
    tooltip.textContent = 'Enter a valid email address';
});

comments.addEventListener("mouseover", function() {
    tooltip.textContent = 'Enter your feedback here';
});

// Hide tooltips
userName.addEventListener('mouseout', function() {
    tooltip.textContent = '';
});

email.addEventListener("mouseout", function() {
    tooltip.textContent = '';
});

comments.addEventListener("mouseout", function() {
    tooltip.textContent = '';
});

//Validate form on submit
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (userName.value.trim() ==="" || email.value.trim() === "" || comments.value.trim() === "") {
        validationMessage.textContent = "Please fill out all fields before submission.";
    return;
 } 

 validationMessage.textContent = "";
   
const feedbackEntry = document.createElement('div');

feedbackEntry.innerHTML = `
    <h3>${userName.value}</h3>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Feedback:</strong> ${comments.value}</p>
`;

feedbackDisplay.appendChild(feedbackEntry);

form.reset();
charCount.textContent = "Characters: 0";
}); 

// Event bubbling and delegation for all form fields
form.addEventListener("mouseover", function(event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        event.target.style.backgroundColor = "#f0f8ff";
    }
});

form.addEventListener("mouseout", function(event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        event.target.style.backgroundColor = "";
    }
});

// Prevent background clicks from triggering form-related events

form.addEventListener("click", function(event) {
    event.stopPropagation();
});

document.body.addEventListener("click", function() {
    validationMessage.textContent = "Background clicked";
});

