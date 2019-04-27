
<template>
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
                    color = 'indigo'>
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
</template>

<script>
    export default {
        name : 'ProductItem',
        props : ['product', 'presentation'],
        data(){
            return({
                show : false,
            })
        }
    }
</script>

<style>
    .yellow{
        color: #c49721;
        display: inline;
    }

    .price{
        padding-top: 12px;
        padding-bottom: 12px;
    }
</style>
