const form = document.getElementById("eventRegistrationForm")

const ticketNumber = document.getElementById("ticket-number")
const emailInput = document.getElementById("email")
const userInput = document.getElementById("username")

form.addEventListener("submit", (event) => {
    // const error = document.getElementsByClassName("error-message")
    // error.parentElement.removeChild(error)

    if(!validateForm()){
        event.preventDefault()
        console.error("Form is invalid")
    }
})

/**
 * Ticket Pattern
 * \b asserts a word boundary.
 * (?:\d{4}[- ]?){3} matches three groups of four digits, optionally followed by a hyphen or space.
 * \d{4} matches the final group of four digits.
 * | acts as an OR operator.
 * \b\d{15,16}\b matches a 15 or 16 digit number without separators.
 */
function validateForm() {
    let isFormValid = true

    const ticketPattern = /\b(?:\d{4}[- ]?){3}\d{4}\b|\b\d{15,16}\b/;
    const complexEmailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (userInput.value.trim() === ""){
        showInputError(userInput, "Username is required")
        isFormValid = false
    }

    if (!ticketPattern.test(ticketNumber.value)) {
        showInputError(ticketNumber, "Please enter a valid ticket number")
        isFormValid = false
    }

    if (!complexEmailPattern.test(emailInput.value)) {
        showInputError(emailInput, "Please enter a valid email address")
        isFormValid = false
    }

    return isFormValid
}

function showInputError(inputElement,message) {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert")

    // inputElement.parentElement.removechild(errorDisplay)
    inputElement.parentElement.appendChild(errorDisplay)
}