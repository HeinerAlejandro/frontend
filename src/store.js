import Vue from 'vue'

const origin =  window.location.origin

const handleError = err => {
    Vue.notify({
        group : 'errors',
        title: 'No se ha podido realizar la operacion',
        text: 'Operacion de registro rechazada,asegurese, que los datos que proporciona, sean validos'
    })
}

const opWithData = data => {
    Vue.notify({
        group : 'success',
        title: 'Operacion completada',
        text: '¡Su Registro se realizo satisfactoriamente!'
    })
}

var store = {
    debug : true,
    state : {
        user : null,
        token : null,
        dataShoppingCar: []
    },
    setProductsToShoppingCarAction(ItemShoppingCar){
        this.state.dataShoppingCar.push(ItemShoppingCar)
    },
    resolvePromise(promise, operation = null){
        if(operation)
            promise
                .then(data => operation(data))
    },
    initRegistrationAction(data_registration){

        const body = data_registration

        let headers = new Headers()

        headers.append('Content-Type', 'application/json')
        
        const options = {
            method : 'post',
            body : JSON.stringify(body),
            headers
        }

        const url = origin + '/registration'

        this.fetchData(url, options)
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

                this.getUserAction()
            }) 
        }

        this.fetchData(url, options, opWithData)
    },
    setToken(token){
        this.state.token = token
    },
    getUserAction(){

        const token = localStorage.getItem('token')

        if(token)
            this.state.token = token

        if(this.state.token){
            const headers = new Headers()
            headers.append('Authorization', 'Token ' + this.state.token)

            let options = {
                method : 'get',
                headers
            }

            const url = origin + '/user/'

            const opWithData = data => {
                this.resolvePromise(data, (data) => this.setUser(data))
            }

            this.fetchData(url, options, opWithData)
        }
    },
    setUser(user){
        this.state.user = user
    },
    fetchData(path, options, opWithData = opWithData, handleError = handleError){
        
        fetch(path, options)
            .then( response => {
                
                const json = response.json()
                
                if(response.ok)
                    opWithData(json)
                else
                    throw json
            })
            .catch(err => handleError(err))
    }
}

export default store