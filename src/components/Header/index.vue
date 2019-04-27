<template>
    <v-container 
        justify-content-center
        class = 'section-header'
        tag = 'header'
        fluid>

        
        <v-layout  class = 'text-center  nav'  lg7 justify-space-around justify-center>
            <v-flex><span><a href="#" v-scroll-to="'#service-section'">servicios</a></span></v-flex>
            <v-flex><span><a href="#" v-scroll-to="'#product-section'">productos</a></span></v-flex>
            <v-flex><span><a href="#" v-scroll-to="'#section-place'">espacios</a></span></v-flex>
            <v-flex><span><a href="#" v-scroll-to="'#registration'">registro</a></span></v-flex>
        </v-layout>

        <h1 class = 'text-center title-position-header'>PicFamily</h1>

         <v-layout class = 'content-form-login' column justify-center align-center>
        <v-flex>
          <FormLogin 
            v-show = 'true'
            :submit = 'authentication' />

            <div v-show = 'false'>
                <h4>Bienvenido {{sharedState.user.username}}</h4>
            </div>
        </v-flex>
    </v-layout>
        

        <h3 class = 'text-center slogan'>creando momentos inolvidables</h3>

    </v-container>    
</template>

<script>

    import FormLogin from './FormLogin.vue'
    import Store from './../../store'

    export default {
        name : 'Header',
        data(){
            return({
                privateState : {},
                sharedState : Store.state
            })
        },
        methods: {
            authentication(){

                const data = {
                    email : document.forms.login_form.lemail.value,
                    password : document.forms.login_form.lpass.value
                }

                Store.initAuthenticationAction(data)
                Store.getUserAction()
            }
        },
        components : {
            FormLogin
        }
    }
</script>

<style>

    .nav{
        box-sizing: border-box;
        padding-left: 200px;
        padding-right: 200px;
    }

    .section-header{
        height: 100vh;
        background : url('./images/header.jpg');
        background-size: cover;
        background-position: center;
        color: white;
    }
    .slogan{
        position: relative;
        top: 52%;
         font-family: 'Amaranth', sans-serif;
    }

    .title-position-header{
        position: relative;
        top : 30px;
        font-size: 7rem;
        font-family: 'Amaranth', sans-serif;
    }

    .nav{
        font-family: 'Ubuntu', sans-serif;
    }
</style>


