<template>
    <v-container
        class = 'product-section'
        tag = 'section'
        grid-list-lg
        fluid
        >

        <h2 class = 'title-section text-center text-section'>PRODUCTOS PICFAMILY</h2>

        <v-alert
            type="error"
            v-model = "alert">
            Opps, parece que no hay productos registrados o su internet es muy lento
        </v-alert>

        <v-layout>
            <v-flex lg2 md2 xs8 offset-lg1 offset-xs1 offset-md1 align-content-center>
                <v-select
                    v-show="show_select"
                    class = 'select-view' 
                    flat
                    :items = 'select_items'
                    label="tipo de vista"
                    >
                    <div>Cartas</div>
                    <div>Miniaturas</div>
                </v-select>
            </v-flex>
        </v-layout>

       
        <v-container grid-list-lg align-center>
            <v-layout row wrap justify-center>
                <v-flex
                    lg3
                    md4
                    xs10
                    v-for='product in products_show'
                     :key = 'product.title'
                     >
                    <ProductItem :product = 'product' />
                </v-flex>
            </v-layout>
        </v-container>

        <v-layout justify-center>
            <v-flex xs8>
               
                <v-pagination
                    v-model = "page"
                    :lenght = "products.length/max_show + 1"
                    :total-visible = "8"
                />
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>

    import ProductItem from './ProductItem.vue'

    export default {
        name : 'ProductSection',
        data(){
            return({
                products : [],
                products_show : [],
                view_type : 'complete',
                alert : false,
                select_items : ['CARTAS', 'MINIATURAS'],
                show_select : window.screen.width < 1024 || !this.products ? false : true,
                page : 1,
                max_show : 8
            })
        },
        methods : {
            obtainSelectedPage(value){
                this.page = value
            }
        },
        components : {
            ProductItem
        },
        mounted(){

            const options = {
                method : 'get'
            }

            fetch(window.location.origin + '/products/', options)
                .then( response => (response.json()) )
                .then( products => {
                    this.products = products
                    if(this.products) this.show_select = true
                    this.products_show = this.products.slice(
                        this.page * this.max_show - this.max_show,
                        this.page * this.max_show)
                })
                .catch( () => this.alert = true )

        }
    }
</script>

<style>

.title-section{
    width: 400px;
    text-align: center;
    margin : 5px 50px 50px calc(50% - 200px);
}


</style>



