<template>
    <div class = 'data-place'>
        <h1 >{{place.title}}</h1>
        <h4 v-if = 'place.posts > 0'>puestos disponibles : {{place.posts}}</h4>
        <v-rating
            v-model = "place.rating"
            background-color = "orange lighten-3"
            color = "orange"
            medium
        />
        <v-btn
            v-if = 'place.posts > 0'
            @click="open = !open">
            Reserva un pueto Picfamily     
        </v-btn>

        <v-dialog
            v-model = "open"
            persistent
            max-width = "290">
           
            <v-card>
                <v-img>
                    <v-card-title class="headline">¿Para que fecha desea reservar una cabaña?</v-card-title>
                </v-img>

                <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                </v-date-picker>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" flat @click="open = false">Cancelar</v-btn>
                <v-btn
                    color="orange darken-1" 
                    flat 
                    @click="fetchCreateReservation"
                    v-if = 'user'
                    >Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    
</template>

<script>

    
    import Store from './../../store'

    export default {
        name : 'place',
        props : ['place'],
        data(){
            return({
                user : Store.state.user,
                colorTextDefault : '#FFFF',
                colorShowed : '',
                sharedState: Store.state,
                open: false,
                date: ''
            })
        },
        methods:{
            fetchCreateReservation(){
                
                const url = window.location.origin + '/reservation/'
               
                const body = {
                    title: this.place.title,
                    date: this.date
                }

                let headers = new Headers()

                headers.append('Content-Type', 'application/json')
                headers.append('Authorization', 'token ' + localStorage.getItem('token'))

                const options = {
                    method: 'post',
                    body : JSON.stringify(body),
                    headers
                }

                Store.fetchData(url, options)
            }
        }
    }
</script>

<style>
    .data-place{
        position: relative;
        top : 60vh;
        left: 80px;
    }


    .data-place h1, .data-place h4{
        font-family: 'Amaranth', sans-serif;
        color:white;
    }

    .data-place h1{
        font-size: 4rem;
    }

    @media (max-width: 500px){
        .data-place h1{
            font-size: 2.5rem;
        }
    }
</style>
