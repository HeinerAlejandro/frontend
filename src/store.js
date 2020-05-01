import Vue from 'vue'
import { getCookie } from './utils';

const origin =  window.location.origin

const handleError = err => {
    Vue.notify({
        group : 'errors',
        title: 'No se ha podido realizar la operacion',
        text: 'Operacion de registro rechazada,asegurese, que los datos que proporciona, sean validos'
    })
}

const opWithData = (data = null) => {
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
        headers.append('X-CSRFToken', getCookie('csrftoken'))
        
        const options = {
            method : 'post',
            body : JSON.stringify(body),
            headers
        }

        const url = origin + '/registration'

        this.fetchData(url, options)
    },
    initAuthenticationAction(data_login){

        let body = new FormData()
        let headers = new Headers()

        body.append('email', data_login.email)
        body.append('password', data_login.password)

        headers.append('X-CSRFToken', getCookie('csrftoken'))
        
        let options = {
            method : 'post',
            headers,
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
    createReservationAction(data){

        const url = window.location.origin + '/places/'+ data.title +'/reservations/'

        let headers = new Headers()

        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', 'token ' + localStorage.getItem('token'))
        headers.append('X-CSRFToken', getCookie('csrftoken'))

        const options = {
            method: 'post',
            body : JSON.stringify(data),
            headers
        }

        const opWithData = (data) => {
           
            this.resolvePromise(data, data => {
                const detail = data.detail

                Vue.notify({
                    group : 'success',
                    title: 'Operacion completada',
                    text: detail
                })
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
            headers.append('X-CSRFToken', getCookie('csrftoken'))
       
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

                let json = null
                
                
                if(response.ok){
                    try{
                    
                        json = response.json()
                        opWithData(json)

                    }catch(err){
                        
                        opWithData()

                    }
                }else
                    throw('')
            })
            .catch(err => handleError(err))
    }
}

export default store