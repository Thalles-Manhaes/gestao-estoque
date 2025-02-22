const password = document.querySelector('#password')
const btnLogin = document.querySelector('#btn-enter-login')
const form     = document.querySelector('#form')
const email    = document.querySelector('#email')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    validForm()
})

function validForm (){
    const passwordValue = password.value
    const emailValue = email.value
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(emailValue)){
        console.log('email invalido!')
    }
    validFieldPassword(passwordValue)
}

//validating password
function validFieldPassword (fieldPassword) {
    if((fieldPassword === '')){
        console.log('Erro: senha vazia!')
        return false
    }

    if(fieldPassword.length <= 4) {
        console.log('A senha tem que ter mais de 4 caracteres!')
        return false
    }

    const regex = /[!#$%^&*()_+\-=[\]{};':"\\|,.<>?]/
    if (!regex.test(fieldPassword)){
        console.error('O emial precisa ter pelo menos 1 caractere especial!')
        return false
    }

    return true
     
}



