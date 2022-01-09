function add (num) {
    
    const number = document.getElementById('current-result').innerHTML 
    document.getElementById('current-result').innerHTML = number + num
}

function cleanAll() {
    document.getElementById('current-result').innerText = ''
}
function clean() {
    const result = document.getElementById('current-result').innerHTML
    document.getElementById('current-result').innerText = result.toString().slice(0, -1)
}
function calcule() {
    result = document.getElementById('current-result').innerHTML
    if(result) { 
        document.getElementById('current-result').innerHTML = eval(result)
    }
}