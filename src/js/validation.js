// The validation of this form will be done using the CONSTRAINT VALIDATION API
// This API consists of a set of methods and properties to form element DOM interface. 


class FormComponent {
  // I want to make select the form, the email and the span DOM node which will be used for the validation process and make them private properties. 
  #form = document.querySelector("form[class='form']"); 
  #email = document.getElementById("email");
  #errorMessage = document.querySelector(".error-message");  


  // There are two cases where I wish to perform the validation when the user is typing something in the input field and when the user submits the form, we want to check if the form is valid. 

  // The form is not valid when the user submits and empty form 
  // The form is not valid when the user submits the value of the input field that is not in the required syntax. 
  // When the user is not typing the required syntax.

  constructor() {
    this.#form.addEventListener("submit", this.#submitForm.bind(this)); 
    this.#email.addEventListener("input", this.#checkUserInput.bind(this)); 
  }

  // Handling the input event
  #checkUserInput() {
    // Check to see if the form if valid, if it is the reset the content of the message displayed to the user, we want reset the visual state on the input state. If not then display the error message to the user. 

    if(this.#email.validity.valid) {
      this.#resetErrorMessageAndIndicator(); 
    }else {
      this.#showErrorMessageAndIndicator(); 
    }
  }


  #submitForm(evtObj) {
    if(this.#email.validity.valid) {
      this.#resetErrorMessageAndIndicator(); 
    }else {
      //if the validation constraints are not met then we need to stop the form from submitting and display the error message to the user.
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(); 
    }
  }


  #resetErrorMessageAndIndicator() {
    this.#errorMessage.textContent = ""; 
    this.#email.className = ""; 
    this.#email.nextElementSibling.className = "error-icon"; 
  }


  // This method is responsible for showing the error depending on the state of input field. 
  #showErrorMessageAndIndicator() {
    if(this.#email.validity.valueMissing) {
      this.#errorMessage.textContent = "Please enter your email"; 
    }else if(this.#email.validity.typeMismatch) {
      this.#errorMessage.textContent = "Please provide a valid email"; 
    }

    this.#email.className = "email-error"; 
    this.#email.nextElementSibling.className = "error-icon error-icon__active";
  }

}

new FormComponent(); 

