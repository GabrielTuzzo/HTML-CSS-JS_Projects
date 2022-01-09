class Calculator {
    add(num1, num2) {
        return  num1 + num2
    }
    
    subtract(num1, num2) {
        return  num1 - num2
    }
    divide(num1, num2) {
        return  num1 / num2
    }
    multiply(num1, num2) {
        return  num1 * num2
    }
}
class Display {
    constructor(displayPreviewValue, displayCurrentValue) {
        this.displayPreviewValue = displayPreviewValue
        this.displayCurrentValue = displayCurrentValue
        this.calculator = new Calculator() //take the content of the class Calculator
        this.PreviewValue = ''
        this.CurrentValue = ''
        this.operationType = ''
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            divide: '÷'
        }
    }
    addNumber(number) {
        if(number === '.' && this.CurrentValue.includes('.')) return //will just have one '.' allowed in the textContent     
        this.CurrentValue = this.CurrentValue.toString() + number
        this.importValues()
    }
    importValues() {
        this.displayCurrentValue.innerHTML = this.CurrentValue
        this.displayPreviewValue.innerHTML = `${this.PreviewValue} ${this.signs[this.operationType] || ''}` //then, the '*' operation type will be = 'x' and will take all the operations signs from the "this.signs"
    }
    deleteAll() {
        this.PreviewValue = ''
        this.CurrentValue = ''
        this.operationType = ''
        this.importValues()
    }
    delete() {
        this.CurrentValue = this.CurrentValue.toString().slice(0, -1) //remove the last value of the text content in the input
        this.importValues() 
    }
    
    calculate() {
        const PreviewValue = parseFloat(this.PreviewValue) // it reviews the string argument
        const CurrentValue = parseFloat(this.CurrentValue)

        if (isNaN(CurrentValue) || isNaN(PreviewValue)) return // will check if it "is Not a Number"
        this.CurrentValue =  this.calculator[this.operationType](PreviewValue, CurrentValue) // will take the preview value and calculate with the current value
    }    
    compute(type) {
        this.operationType !== 'equal' && this.calculate()
        this.operationType = type
        this.PreviewValue = this.CurrentValue || this.PreviewValue
        this.CurrentValue = ''
        this.importValues()
    }
}

const displayPreviewValue = document.getElementById("preview-result")
const displayCurrentValue = document.getElementById("current-result")
const numbersbutton = document.querySelectorAll('.number')
const simbolsbutton = document.querySelectorAll('.simbol')
const display = new Display(displayPreviewValue, displayCurrentValue)


numbersbutton.forEach (number => {
    number.addEventListener('click', () => display.addNumber(number.innerHTML)) // will import all the numbers
})

simbolsbutton.forEach (simbol => {
    simbol.addEventListener('click', () => display.compute(simbol.value)) // will import all the simbols 
})

