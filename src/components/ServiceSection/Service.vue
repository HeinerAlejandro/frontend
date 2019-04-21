<template>
    <div class = 'content-service'>
        <v-layout class = 'text-center' column align-center>
            <v-flex>
                <v-icon
                    :color = 'service.color'
                    size = 80>
                    {{service.image}}
                </v-icon>
            </v-flex>
            <v-flex>
                <h4 class = 'margin text-section descripcion'>
                    {{service.title}}
                </h4>
            </v-flex>
            <v-flex>
                <p>
                    {{service.description}}
                </p>
           </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name : 'Service',
        props : ['service',]
    }
</script>

<style>

    .description{
        font-family: 'Ubuntu', sans-serif;
    }
    .content-service h3{
        padding: 25px;
    }
</style>
