
<template>
    <div>
        <v-card
            hover>
                <v-img
                    :src = 'product.presentation'
                    height = '190px'>
                </v-img>

            
                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{product.title}}</div>
                        <span class="grey--text">{{product.categorie}}</span>
                    
                    </div>
                </v-card-title>

                <v-card-text class = 'price'>
                    <div class="title">Precio: <span class = 'yellow'>{{product.price}} Bsf</span></div>
                </v-card-text>

                <v-card-actions>
                    <v-btn 
                        flat
                        color="orange darken-1"
                        @click = 'open = !open'
                        >
                            AL CARRITO
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        icon
                        @click = "show = !show">
                            <v-icon>
                                {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                            </v-icon>
                    </v-btn>
                </v-card-actions>

                <v-card-text 
                    v-show="show"
                    >
                    {{product.description}}
                </v-card-text>
        
        </v-card>

        <v-dialog
            v-model = "open"
            persistent
            max-width = "300">
           
            <v-card>
                <v-img
                    :src = 'product.presentation'>
                    <v-card-title class="white--text headline">{{product.title}}</v-card-title>
                </v-img>
                <v-card-text class="margin-top">
                    <v-text-field
                        type = 'number'
                        label="Cantidad"
                        :value="cant"
                        v-model="cant"
                        @change="setPriceModal"
                    ></v-text-field>
                    <div class="title">Precio: <span class = 'yellow'>{{ modalPrice }} Bsf</span></div>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" flat @click="open = false">Cancelar</v-btn>
                <v-btn color="orange darken-1" flat @click="setProductToShoppingCar">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

    import Store from './../../store'

    export default {
        name : 'ProductItem',
        props : ['product', 'presentation'],
        data(){
            return({
                show : false,
                open : false,
                sharedState : Store.state,
                cant : 1
            })
        },
        computed : {
            modalPrice(){
                return this.product.price*this.cant
            }
        },
        methods: {
            setProductToShoppingCar(){
                
                const item = {
                    imageProduct: this.product.presentation,
                    name: this.product.title,
                    cant: this.cant,
                    totalPrice: this.modalPrice,
                    selected: false
                }

                Store.setProductsToShoppingCarAction(item)

                this.open = false
            }
        }
    }
</script>

<style>

    .margin-top{
        margin-top: 30px;
    }
    .yellow{
        color: #c49721;
        display: inline;
    }

    .price{
        padding-top: 12px;
        padding-bottom: 12px;
    }
</style>
