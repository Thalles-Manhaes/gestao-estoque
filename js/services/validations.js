(()=> {
    const validation = ()=> {

        return {
            isEmpty: (value) => {
                console.log(value, 'campo está vazio!')
                return value === '' || value.length === 0
            },
            isEmailValid: (email) => {
                const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !checkEmail.test(email);
            },
            isPasswordValid: (password) => {

                //tem que conter 1 letra maiuscula
                //tem que conter pelo menos uma caracter especial 
                //tem que conter no minimo 5 numeros
                if(password.toUpperCase()){

                }else{
                    console.log('letra minuscula!')
                }
            }
        }
    }
    validation()
})()