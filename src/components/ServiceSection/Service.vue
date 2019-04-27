<template>
    
    <v-card height = '250' class = 'content-service'>
        <v-card-title primary-title>
            <div class="border-bottom-color title">{{service.title}}</div>
        </v-card-title>
        <v-card-text>
            <div class="description">{{service.description}}</div>
         </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name : 'Service',
        props : ['service',]
    }
</script>

<style>

    .title{
        color:black;
    }

    .description{
        color:black;
        font-size: 16px;
    }

    .border-bottom-color{
        padding: 5px;
        border-bottom: 3.5px solid #71e88b;
    }

    .content-service{
        opacity: .5;
        text-align: justify;
        margin-bottom: 50px;
    }

    .content-service h3{
        padding: 25px;
        opacity: 1;
    }
</style>
