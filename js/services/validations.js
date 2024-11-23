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
        console.log(btnEnterLogin)
        btnEnterLogin.addEventListener('click', ()=>{
            isValidEmail()
            validForm()
            clearFormLogin()
        })
    }
    clickedInBtnLogin()

})()