(()=> {
    const fieldEmail = document.querySelector('#email')
     const fieldPassword = document.querySelector('#password')
     
    isValidEmail = (email) =>{
        email = fieldEmail.value
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const emailValid = emailRegex.test(email)
        if(!emailValid){
            console.log('email invalido')
        }else{
            console.log("email valido")
        }
    }
    isValidPassword = (password) =>{
        password = fieldPassword.value
            const regexUppercase = /[A-Z]/
            const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
            const regexNumbers = /\d/;
            
            const hasUppercase = regexUppercase.test(password)
            const hasSpecialChar = regexSpecialChar.test(password)
            const hasNumbers = regexNumbers.test(password)
            const hasMinLength = password.length >= 8
            
            if(!hasUppercase && !hasSpecialChar && !hasNumbers){
                console.log('senha incorreta')
                return false
            }else{
                console.log('senha correta', password)
                return true
            }
    }
    const validForm = () => {
        const formLogin = document.querySelector('#form-login')
        formLogin.addEventListener('submit', (e)=> {
            e.preventDefault()
        })
    }

    const clearFormLogin = () => {
        fieldEmail.value = ''
    }
  
    const clickedInBtnLogin = () => {
        const btnEnterLogin = document.querySelector('#btn-enter-login')
        btnEnterLogin.addEventListener('click', ()=>{
            isValidEmail()
            isValidPassword()
            validForm()
            clearFormLogin()
        })
    }
    clickedInBtnLogin()

})()