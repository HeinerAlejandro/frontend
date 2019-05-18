<template>
     <form
        class = 'form_login' 
        name = 'login_form'
        v-on:submit.prevent = 'submit'>

        <input class = 'opacity-input-form input-form-h' placeholder = "correo" name = 'lemail'>
        <input class = 'opacity-input-form input-form-h' placeholder = "contraseña" name = 'lpass' type = 'password'>
                
        <input 
            type = 'submit'
            class = 'submit-header'
            value = 'Logeate'
        >
    </form>
</template>

<script>
export default {
    name : 'FormLogin',
    props : {
        'submit': Function
    }
}
</script>

<style>

    .content-form-login{
        position: relative;
        top: 25%;
    }

    .form_login{
        z-index:-1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 450px;
        justify-content: space-between;
    }

    .input-form-h{
        width: 220px;
        height: 30px;
        border-radius: 5px;
        box-sizing: border-box;
        padding-left: 20px;
    }

     @media (max-width: 400px) {

        .form_login{
            margin-top: -20px;
            height: 120px;
            width : 300px;
            display:flex;
            flex-direction:column;
            justify-content: space-around;
        }
        .input-form-h{
            width:100%;
        }
    }

    @media (max-width: 700px) {

        .form_login{
            height: 130px;
            display:flex;
            flex-direction:column;
            justify-content: space-around;
        }
        .input-form-h{
            width:100%;
        }
    }

    .submit-header{
        width: 100%;
        height: 30px;
        margin-top: 10px;
        background: #e38153;
    }

</style>

