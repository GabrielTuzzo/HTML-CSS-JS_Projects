const inputs = document.querySelectorAll("input")

function ValidateInput(input) {
    function verifyErrors() {
        let foundError = false;

        for(let error in input.validity) {

            if (input.validity[error] && !input.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "please fill this field"
            },
            email: {
                valueMissing: "Email is required",
                typeMismatch: "Please fill in a valid email"
            }
        }

        return messages[input.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = input.parentNode.querySelector("span.error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            input.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            input.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const input = event.target
    const validation = ValidateInput(input)

    validation()

}

for( input of inputs ){
    input.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    input.addEventListener("blur", customValidation) // blur= when you click out of the input 
}



































































