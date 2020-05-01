<template>
    <div>
        <div class = 'shopping-button'>
            <v-btn  
                @click = "open = !open"
                fab dark color="teal">
                <v-icon dark>list</v-icon>
            </v-btn>
        </div>
        
        <cart
            :items = 'sharedState.dataShoppingCar'
            :open = 'open'
            :controlModal = 'controlModal'
            :createOrder = 'createOrder'
            :fetchData = 'fetchData'
        />
    </div>
</template>

<script>

    import Store from './../../store.js'
    import cart from './cart.vue'

    export default {
        name : 'ShoppingCart',
        components: {cart},
        data(){
            return({
                open: false,
                sharedState: Store.state
            })
        },
        methods:{
            controlModal(){
                this.open = !this.open
            },
            createOrder(){

                const data = this.sharedState.dataShoppingCar.map(product => {
                    delete product.selected
                    return product
                })

                return data
            },
            fetchData(url, options, handleWithData = null, handleError = null){
                Store.fetchData(url, options, handleWithData)
            }
        }
    }
</script>

<style>
    .shopping-button{
        position: fixed;
        right: 100px;
        bottom: 22px;
    }
</style>

