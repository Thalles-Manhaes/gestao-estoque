const validation = ()=> {
    return {
        isEmpty: (value) => {
            return value === '' || value.length === 0
        },
        isEmailValid: (email) => {
            const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return !checkEmail.test(email);
        }
    }
}