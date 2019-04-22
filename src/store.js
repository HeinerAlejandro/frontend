import Vue from 'vue'

const handleErrors = error => {
    
}

const origin =  window.location.origin

var store = {
    debug : true,
    state : {
        user : {},
        token : null
    },
    resolvePromise(promise, operation){
        promise
            .then(data => operation(data))
    },
    initRegistrationAction(data_registration){

        const body = new FormData(data_registration)
        console.log(body)
        const options = {
            method : 'post',
            body
        }


        const url = origin + '/registration/'

        const opWithData = data => {
            
        }

        this.fetchData(url, options, opWithData)
    },
    initAuthenticationAction(data_login){

        const body = new FormData()

        body.append('email', data_login.email)
        body.append('password', data_login.password)

        let options = {
            method : 'post',
            body
        }
        
        const url = origin + '/login/'

        const opWithData = data => {
           
            this.resolvePromise(data, data => {

                this.setToken(data.key)
                localStorage.setItem('token', data.key)

                Vue.notify({
                    group : 'success',
                    title: 'Operacion completada',
                    text: '¡Su autenticacion se realizo satisfactoriamente!'
                })
            }) 
        }

        this.fetchData(url, options, opWithData)
    },
    setToken(token){
        this.token = token
    },
    getUserAction(){
        if(this.token){
            const headers = new Headers()
            headers.append('Authorization', 'Token ' + this.token)

            let options = {
                method : 'get',
                headers
            }

            const url = origin + '/user'

            const opWithData = data => {
                this.resolvePromise(data, (data) => this.setUser(data))
            }

            this.fetchData(url, options, opWithData)
        }
    },
    setUser(user){
        this.user = user
    },
    fetchData(path, options, opWithData = null, handleError = handleErrors){

        fetch(path, options)
            .then( response => {
               
                const json = response.json()
               
                if(response.ok)
                    opWithData(json)
                else
                    throw json
            })
            .catch(err =>handleError(err))
    }
}

export default store