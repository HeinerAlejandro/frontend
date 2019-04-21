<template>
    <div id = 'registration' class = 'container-fluid'>
	<div class = 'row center'>
		<div class = 'col-4 offset-2'>
			<h1>¡UNETE A NOSOTROS!</h1>
		</div>
		<div class = 'w-100'></div>
		<div class = 'col offset-lg-1 offset-md-1' >
			<form name = 'form_registration' @submit = 'regitration'>
				<div class = 'row'>
					<div class = 'col-lg-3 col-md-4 col-sm-4'>
						<input
							type="text"
							name="name_r"
							placeholder="nombre"
							class = 'opacity-input-form margin-input-form form-control'>
					</div>
					<div class = 'col-lg-3 col-md-4 col-sm-4'>
						<input
							type="text"
							name="lastname_r"
							placeholder="apellido"
							class = 'opacity-input-form margin-input-form form-control'>
					</div>
					<div class = 'w-100'></div>
					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<input
							type="email"
							name="email_r"
							placeholder="correo"
							class = 'opacity-input-form margin-input-form form-control'>
					</div>
					<div class = 'w-100'></div>
					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<input
							type="password"
							name="password_r"
							placeholder="contraseña"
							class = 'opacity-input-form margin-input-form form-control'>
					</div>
					<div class = 'w-100'></div>

					<div class = 'col-lg-6 col-md-8 col-sm-8'>
						<input
							type="submit"
							name="submit"
							placeholder="contraseña"
							class = 'margin-input-form color-yellow form-control'>
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
			regitration(){

				const data = {
					first_name : document.forms.form_registration.name_r.value,
					last_name: document.forms.form_registration.lastname_r.value,
					email: document.forms.form_registration.email_r.value,
					password: document.forms.form_registration.pass_l.value
				}

				Store.initRegistratitionAction(data)
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

.margin-input-form{	
	margin-top: 10px;
}

.color-yellow{
	background: #eab11c;
	border: none;
	opacity: 0.8;
}

#registration input{
	color:white;
}

</style>