<template>
    <v-container 
        justify-content-center
        class = 'section-header'
        tag = 'header'
        fluid>

        <transition name = 'move-nav'>
            <div  class = 'text-center  nav' v-if = 'openNav'>
                <a class = 'item-nav' href="#" v-scroll-to="'#service-section'">servicios</a>
                <a href="#" class = 'item-nav' v-scroll-to="'#product-section'">productos</a>
                <img
                    class = 'logo-h' 
                    src = "/static/pfl1.png"> 
                <a class = 'item-nav' href="#" v-scroll-to="'#section-place'">espacios</a>
                <a class = 'item-nav' href="#" v-scroll-to="'#registration'">registro</a>
            </div>
        </transition>

        <button
            :class = "openNav?'btnav':'btnav-inactive'"
            @click = 'controlNav'>
            <v-icon>list</v-icon>
        </button>

        <h1 class = 'text-center title-position-header'>PicFamily</h1>

         <v-layout class = 'content-form-login' column justify-center align-center>
        <v-flex>
          <FormLogin 
            v-if = '!sharedState.user'
            :submit = 'authentication' />

            <div v-if = 'sharedState.user'>
                <h4>Bienvenido {{sharedState.user.username}}</h4>
                <v-btn
                    color = 'orange'
                    @click = 'logout'
                    >Desconectarse</v-btn>
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
                sharedState : Store.state,
                openNav : true
            })
        },
        methods: {
            logout(){
                fetch('http://www.picfamily.com:8000/logout/',{
                    method : 'post', 
                    headers : {
                        'Authorization' : 'Token ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    if(response.ok){
                        Store.state.user = null
                        Store.state.token = null
                        localStorage.removeItem('token')
                    }
                })
            },
            authentication(){

                const data = {
                    email : document.forms.login_form.lemail.value,
                    password : document.forms.login_form.lpass.value
                }
                
                if(!localStorage.getItem('token')) Store.initAuthenticationAction(data)

                Store.getUserAction()
            },
            controlNav(){
                this.openNav = !this.openNav
            }
        },
        components : {
            FormLogin
        },
        mounted(){
            this.authentication({})
        }
    }
</script>

<style>
    .logo-h{
        width: 60px;
        height: 60px;
    }

    .nav{
        display:flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding-left: 200px;
        padding-right: 200px;
        color:white;
    }

     @media (max-width: 1600px){
          .btnav{
            position : relative;
            display: none;
            z-index:100;
        }
     }

    @media (max-width: 800px) {
        .btnav{
            transition: all .3s ease;
            background: black;
            border:none;
            color: white;
            opacity: .95;
            width: 50px;
            height: 50px;
            display: inline-block;
            position: relative;
            left: 283px;
        }

        .btnav-inactive{
            transition: all .3s ease;
            position: relative;
            left: 0px;
            width: 60px;
            height: 60px;
            background-color: #e18154;
        }

        .nav{
            position:absolute;
            z-index: 100;
            top:0;
            left: 0;
            width: 300px;
            height: 100vh;
            padding-left: 0;
            padding-right: 0;
            display:flex;
            flex-direction: column;
            justify-content: initial;
            align-items: initial;
            background: black;
            flex-wrap: no-wrap;
            opacity: .95;
            color: white;
            overflow: scroll;
        }

        .item-nav{
            padding: 20px;
            width: 100%;
        }

        .item-nav a{
            width: 100%;
        }

        .item-nav:hover{
            background-color:#e18154;
        }

        .logo-h{
            order: -1;
            width: 150px;
            height: 150px;
            margin: 50px;
            align-self:center;
        }
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

    .nav a{
        color:white;
        text-decoration: none;
    }

    .nav{
        font-family: 'Ubuntu', sans-serif;
        color: white;
        text-decoration : none;
    }

.move-nav-enter-active, .move-nav-leave-active {
  transition: all .3s ease;
}

.move-nav-leave-to{
    position : absolute;
    left : -300px;
}

.move-nav-enter{
    position : absolute;
    left: -300px;
}

.move-nav-enter-to{
    position : absolute;
    left : 0px;
}
    
@media (max-width: 800px) {
     .slogan{
        position: relative;
        top: 35%;
        font-family: 'Amaranth', sans-serif;
        font-size: 20px;
    }
}

</style>


