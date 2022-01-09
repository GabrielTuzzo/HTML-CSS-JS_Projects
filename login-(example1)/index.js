const btnSingIn = document.getElementById('singin')
const btnSingUp = document.getElementById('singup')
const body = document.querySelector('body')

btnSingIn.addEventListener('click', function() {
    body.className = 'singIn-js'
})
btnSingUp.addEventListener('click', function() {
    body.className = 'singUp-js'
})