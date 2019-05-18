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
            :delete_selected = 'delete_selected'
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
            delete_selected(){
                
                console.log(Store.state.dataShoppingCar[0])

                for(let i = 0; i < Store.state.dataShoppingCar.length; i ++)
                    if(Store.state.dataShoppingCar[i].selected)
                        Store.state.dataShoppingCar.splice(i, 1)

                console.log(Store.state.dataShoppingCar[0])
            },
            createOrder(){

                var productsInShoppingCart = this.sharedState.dataShoppingCar

                const data = productsInShoppingCart.map(product => {
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

