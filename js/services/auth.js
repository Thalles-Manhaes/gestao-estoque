const authService = () => {
    const login = async ({email, password}) => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          })

          if(error){
            return {
                message: `email e/ou senha invalidos!`,
                error: true,
                payload: null
            }
          }
          return{
            message: `autenticado com sucesso!`,
            error: false,
            payload: data
          }
  
    }
    return {
        login
    }
}