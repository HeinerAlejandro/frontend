<template>
    <div class = 'data-place'>
        <h1 class = 'text-section'>{{place.title}}</h1>
        <h4 classs = 'text-section'>puestos disponibles : {{place.posts}}</h4>
        <v-rating
            v-model = "place.rating"
            background-color = "orange lighten-3"
            color = "orange"
            medium
        />

    </div>
    
</template>

<script>
    export default {
        name : 'place',
        props : ['place']
    }
</script>

<style>
    .data-place{
        position: relative;
        top : 60vh;
        left: 80px;
    }


    .data-place h1, .data-place h4{
        color:white;

    }
</style>
