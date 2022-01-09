const button = document.getElementById('btn')

button.addEventListener('click', mostrarOcultarSenha)

function mostrarOcultarSenha () {
    const senha = document.getElementById("password")
    if (senha.type == 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
}