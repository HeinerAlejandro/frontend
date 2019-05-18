<template>
    <v-container
        id = 'product-section'
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

        
        <v-container grid-list-lg align-center>
            <v-layout row wrap justify-center>
                <v-flex
                    lg3
                    md4
                    xs9
                    v-for='product in products_show'
                     :key = 'product.title'
                     >
                    <ProductItem
                        :product = 'product' 
                        :presentation = 'view_type'/>
                </v-flex>
            </v-layout>
        </v-container>

        <v-layout row justify-center class = 'margin-paginator'>
            <v-flex xs8 md5 lg5 class = 'text-center'>
               
                <v-pagination
                    v-model = "page"
                    @input = "obtainSelectedPage"
                    :length = "(products.length/max_show) + 1"
                    :total-visible = "4"
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
                alert : false,
                page : 1,
                max_show : window.screen.width <= 950 ? 1 : 8,
            })
        },
        methods : {
            obtainSelectOption(value){
                console.log(value)
            },
            obtainSelectedPage(value){
                this.page = value

                this.products_show = this.products.slice(
                    this.page * this.max_show - this.max_show,
                    this.page * this.max_show
                    )

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



