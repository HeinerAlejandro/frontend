<template>
    <v-container
        id = 'service-section'
        tag = 'section'
        fluid>

        <v-layout 
            column
            align-center
            >
            <v-flex>
                <h2 class = 'text-section text-center color-white'>SERVICIOS PICFAMILY</h2>
            </v-flex>
            <v-flex>
                <p class = 'text-center margin color-white description-section'>Te garantizamos al 100% tu disfrute y el de tu familia, ofreciendote los siguientes servicios picfamily</p>
            </v-flex>
        </v-layout>
        <v-layout
            class = 'space-bottom' 
            wrap
            justify-space-around>
            <v-flex 
                v-for = 'service in services'
                :key="service.title"
                xs10 md3 lg3>
                <Service :service = 'service'/>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

    import Service from './Service.vue'

    export default {
        name : 'ServiceSection',
        data(){
            return({
                services : [{
                    image : 'contact_phone',
                    title : 'ATENCION AL CLIENTE',
                    description : 'le ofrecemos un personal capacitado disponible las 24 horas, para solucionar todas sus dudas',
                    color : 'blue'
                },
                {
                    image : 'local_grocery_store',
                    title : 'VENTA DE PRODUCTOS',
                    description : 'poseemos un gran lista de productos para que disfrute del aire libre en familia',
                    color : 'green'
                },
                {
                    image : 'wallpaper',
                    title : 'ESPACIOS RECREATIVOS',
                    description : 'Tenemos muchos espacios agradables que puede visitar para pasar un rato agradable en familia, ¿Que estan esperando?',
                    color : 'orange'
                }]
            })
        },
        components : {
            Service
        }
    }
</script>

<style>

    .space-bottom{
        margin-top: 80px;
    }

    .color-white{
        color: white;    
    }

    #service-section{
        background: url('./images/servicios.jpg');
        background-attachment: fixed;
        background-position: center;
        height: 100vh;
    }

    .margin{
        padding : 70px 0 30px 0; 
    }
</style>
