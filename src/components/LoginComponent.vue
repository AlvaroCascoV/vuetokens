<template>
	<div class="container">
		<div class="row justify-content-center align-items-top mt-5">
			<div class="col-md-6 col-lg-4">
				<div class="card shadow">
					<div class="card-body p-4">
						<h3 class="card-title text-center mb-4">Login</h3>
						<form v-on:submit.prevent="login()">
							<div class="mb-3">
								<label for="nombreUsuario" class="form-label">
									Nombre de Usuario
								</label>
								<input
									type="text"
									class="form-control"
									id="nombreUsuario"
									name="nombreUsuario"
									placeholder="Nombre de usuario"
									required
									v-model="loginInfo.userName"
								/>
							</div>
							<div class="mb-3">
								<label for="contrasena" class="form-label">Contraseña</label>
								<input
									type="password"
									class="form-control"
									id="contrasena"
									name="contrasena"
									placeholder="Contraseña"
									required
									v-model="loginInfo.password"
								/>
							</div>
							<div class="d-grid">
								<button type="submit" class="btn btn-primary">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Global from "@/Global";
	import ServiceEmpleados from "@/services/ServiceEmpleados";
	let service = new ServiceEmpleados();

	export default {
		name: "LoginComponent",
		data() {
			return {
				loginInfo: {
					userName: "",
					password: "",
				},
			};
		},
		methods: {
			login() {
				service.login(this.loginInfo).then((result) => {
					Global.token = result.response;
					this.$router.push("/perfil");
				});
			},
		},
	};
</script>

<style></style>
