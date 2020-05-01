<template>
    <div id = 'registration' class = 'container-fluid'>
	<div class = 'row center'>
		<div class = 'col-4 offset-2'>
			<h1>¡UNETE A NOSOTROS!</h1>
		</div>
		<div class = 'w-100'></div>
		<div class = 'col offset-lg-1 offset-md-1' >
			<form name = 'form_registration'>
				<div class = 'row'>
					<div class = 'col-lg-3 col-md-4 col-sm-4'>
						<input
							type="text"
							name="name_r"
							placeholder="nombre"
							class = 'opacity-input-form margin-input-form input-form'>
					</div>
					<div class = 'col-lg-3 col-md-4 col-sm-4'>
						<input
							type="text"
							name="lastname_r"
							placeholder="apellido"
							class = 'opacity-input-form margin-input-form input-form'>
					</div>
					<div class = 'w-100'></div>
					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<input
							type="email"
							name="email_r"
							placeholder="correo"
							class = 'opacity-input-form margin-input-form input-form'>
					</div>
					<div class = 'w-100'></div>
					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<input
							type="password"
							name="password_r"
							placeholder="contraseña"
							class = 'opacity-input-form margin-input-form input-form'>
					</div>
					<div class = 'w-100'></div>
					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<button
							type="button"
							@click = 'registration'
							class = 'margin-input-form color-yellow input-form'>
							Registrate
						</button>
					</div>		
				</div>
			</form>
		</div>
	</div>
</div>
</template>

<script>

	import Store from './../../store'

    export default {
		methods: {
			registration(){
				
				const data = {
					first_name : document.forms.form_registration.name_r.value,
					last_name : document.forms.form_registration.lastname_r.value,
					email: document.forms.form_registration.email_r.value,
					password1: document.forms.form_registration.password_r.value,
					password2: document.forms.form_registration.password_r.value
				}
				
				Store.initRegistrationAction(data)
			}
		},
        name : 'RegistrationSection'
    }
</script>

<style>

   #registration{
       
	background: url('./../../assets/images/register.jpg');
	background-size: cover;
	height: 100vh;
	background-repeat: no-repeat;
	background-position: center;
	margin:0;
}

#registration h1{
	text-align: center;
	font-size: 10vmin;
	margin-bottom: 10vmin;
	margin-top: -80px;
	margin-left: -18px;
	color: white;
	font-family: 'Amaranth', sans-serif;
}

.row{
	margin:0;
}

.center{
	position: relative;
	top: calc(30%);
}

.input-form{
    display: block;
    width: 100%;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
	height: calc(1.5em + .75rem + 2px);
}

.input-form-large{
	width: 430px;
	height: 35px; 
}

.margin-input-form{	
	margin-top: 10px;
}

.color-yellow{
	background: #eab11c;
	border: none;
	opacity: 0.8;
	color:white;
}

#registration input{
	color:white;
}

</style>