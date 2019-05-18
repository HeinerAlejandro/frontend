<template>
    <v-container
        id = 'section-place'
        class = 'section places-section'
        fluid>

        <v-carousel
            height = '100vh'
            :cycle = 'cycle'
        >
            <v-carousel-item
                v-for="(place,i) in places"
                :key="i"
                :src="place.presentation"
                reverse-transition="fade"
                transition  = 'fade'
            >
                <place 
                    :place = 'place'
                />
            </v-carousel-item>
        </v-carousel>

    </v-container>
</template>

<script>

    import place from './PlaceComponent'

    export default {
        name : 'PlacesSection',
        components : {
            place : place
        },
        data(){
            return({
                places : [],
                cycle : false
            })
        },
        methods: {
            getPlacesFromServer(){
                const url = window.location.origin + '/places/'
                const options = {
                    method : 'get'
                }

                fetch(url, options)
                    .then(response => response.json())
                    .then(json => this.places = json)
                    
            }
        },
        mounted(){
            this.getPlacesFromServer()
        }
    }
</script>

<style>
    .places-section{
        background:#FFFF;
        padding:0;
        margin:0;
    }
</style>

