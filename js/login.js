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
        toastNotification('danger', 'Campo email vazio!', 'top-right')
        return false
        
    }
    validFieldPassword(passwordValue)
}

//validating password
function validFieldPassword (fieldPassword) {
    if((fieldPassword === '')){
        toastNotification('danger', 'Campo senha vazio!', 'top-right')
        return false
    }

    if(fieldPassword.length <= 4) {
        toastNotification('danger', 'A senha tem que ter mais de 4 caracteres!', 'top-right')
        return false
    }

    const regex = /[!#$%^&*()_+\-=[\]{};':"\\|,.<>?]/
    if (!regex.test(fieldPassword)){
        toastNotification('danger', 'A senha precisa ter pelo menos 1 caractere especial!', 'top-right')
        return false
    }

    toastNotification('info', 'Login efetuado com sucesso!', 'top-right')
    return true
     
}



