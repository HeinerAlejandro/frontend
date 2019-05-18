<template>
    <v-dialog
        v-model = "open"
        persistent
        max-width = "800">

        <v-card> 
                <v-data-table
                    :headers="headers"
                    :items="itemss"
                >
                    <template v-slot:items="props">
                        <td>
                            <v-checkbox
                                v-model="props.item.selected"
                                primary
                                hide-details
                            ></v-checkbox>
                        </td>
                        <td><v-img :src = ' props.item.imageProduct'></v-img></td>
                        <td class="text-left">{{ props.item.name }}</td>
                        <td class="text-left">x{{ props.item.cant }}</td>
                        <td class="text-left">{{ props.item.totalPrice }}</td>
                    </template>
            </v-data-table>

            <v-card-text>
                <div>Total a pagar: {{ TotalPrice }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="red darken-1"
                    @click = "delete_selected">Eliminar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" flat @click = 'controlModal'>Cerrar</v-btn>
                <v-btn 
                    color="orange darken-1" 
                    flat v-on:click = 'fetchBuyProducts'
                    v-if = 'sharedState.user'    
                >Comprar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
    
<script>
    import Store from './../../store.js'
    import Vue from 'vue'

    export default {
        name: 'cart',
        props: ['items', 'open', 'controlModal', 'createOrder', 'fetchData', 'delete_selected'],
        data(){
            return({
                sharedState: Store.state,
                itemss: Store.state.dataShoppingCar,
                selected : [],
                headers: [
                { text: '', value: '' },
                { text: 'Presentacion', value: 'imageProduct' },
                { text: 'Nombre', value: 'name' },
                { text: 'Cantidad', value: 'cant' },
                { text: 'Precio', value: 'totalPrice' }]
            })
        },
        methods: {
            delete_selected(){
                this.props.delete_selected()
            },
            addTotalPrice(order){

                order.total = this.TotalPrice
                return order
            },
            fetchBuyProducts(){
                
                let order = {
                    order : this.createOrder(), 
                }
        
                const headers = new Headers()
                const token = localStorage.getItem('token')

                headers.append('Content-Type', 'application/json')
                headers.append('Authorization', 'token ' + token)

                order = this.addTotalPrice(order)
                
                let url = window.location.origin + '/order/'

                const option = {
                    method : 'POST', 
                    body: JSON.stringify(order),
                    headers
                }

                const OpWithData = (data) => {

                    Store.state.dataShoppingCar = {}

                    this.$forceUpdate()

                    Vue.notify({
                        group : 'success',
                        title: 'Operacion completada',
                        text: '¡Ha reservado una cabaña, satisfactoriamente!'
                    })
                }
           
                this.fetchData(url, option, OpWithData)
            }
        },
        computed: {
            TotalPrice(){
                var price = 0

                for(var i = 0; i < this.items.length; i++)
                    price += parseFloat(this.items[i].totalPrice)
                
                return price
            }
        }
    }
</script>

<style>

</style>


