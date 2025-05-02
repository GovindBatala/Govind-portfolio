document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact").addEventListener("input", validateContact);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("fname").addEventListener("input", validateName);
    document.getElementById("contactForm").addEventListener("submit", validateForm);
    
    // Add test button
    let testButton = document.createElement("button");
    testButton.textContent = "Run Tests";
    testButton.style.marginTop = "10px";
    testButton.addEventListener("click", testValidationFunctions);
    document.body.appendChild(testButton);
});

function validateContact() {
    let contactInput = document.getElementById("contact");
    let contactError = document.getElementById("contactError");

    if (/[a-zA-Z]/.test(contactInput.value)) {
        contactError.style.display = "block";
        console.log("Test Failed: Contact should not contain letters");
    } else {
        contactError.style.display = "none";
        console.log("Test Passed: Contact is valid");
    }
}

function validateEmail() {
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");

    if (/^\S+@gmail\.com$/.test(emailInput.value)) {
        emailError.style.display = "none";
        console.log("Test Passed: Valid Gmail");
    } else {
        emailError.style.display = "block";
        console.log("Test Failed: Invalid email format");
    }
}

function validateName() {
    let nameInput = document.getElementById("fname");
    let nameError = document.getElementById("nameError");

    if (/^[a-zA-Z ]{1,50}$/.test(nameInput.value.trim())) {
        let spaceCount = (nameInput.value.match(/ /g) || []).length;
        if (spaceCount >= 1 && spaceCount <= 3) {
            nameError.style.display = "none";
            console.log("Test Passed: Valid full name");
        } else {
            nameError.style.display = "block";
            console.log("Test Failed: Name does not meet space criteria");
        }
    } else {
        nameError.style.display = "block";
        console.log("Test Failed: Invalid name format");
    }
}

function validateForm(event) {
    validateContact();
    validateEmail();
    validateName();

    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
        if (error.style.display === "block") {
            event.preventDefault();
            console.log("Form Submission Blocked: Errors Found");
            return;
        }
    }
    console.log("Form Submitted Successfully");
}