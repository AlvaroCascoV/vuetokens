<template>
	<div>
		<div class="container mt-4">
			<h1 class="mb-4 text-primary">USUARIO</h1>
			<div class="card shadow-sm">
				<div class="card-header bg-primary text-white">
					<h2 class="h5 mb-0">Detalles del Empleado</h2>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<strong>ID Empleado:</strong>
							<span class="badge bg-secondary ms-2">
								{{ empleado.idEmpleado }}
							</span>
						</li>
						<li class="list-group-item">
							<strong>Apellido:</strong>
							<span class="text-muted ms-2">{{ empleado.apellido }}</span>
						</li>
						<li class="list-group-item">
							<strong>Oficio:</strong>
							<span class="text-muted ms-2">{{ empleado.oficio }}</span>
						</li>
						<li class="list-group-item">
							<strong>Salario:</strong>
							<span class="text-success fw-bold ms-2">
								{{ formatCurrency(empleado.salario) }}
							</span>
						</li>
						<li class="list-group-item" v-if="empleado.director != 0">
							<strong>Director:</strong>
							<span class="text-muted ms-2">{{ empleado.director }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ServiceEmpleados from "@/services/ServiceEmpleados";
	let service = new ServiceEmpleados();
	export default {
		name: "PerfilComponent",
		data() {
			return {
				empleado: {},
			};
		},
		mounted() {
			this.getPerfil();
		},
		methods: {
			getPerfil() {
				service.getUsuario().then((result) => {
					this.empleado = result;
				});
			},
			formatCurrency(value) {
				if (value === null || value === undefined || value === "") return "";
				const num = Number(value);
				if (Number.isNaN(num)) return value;
				return new Intl.NumberFormat("es-ES", {
					style: "currency",
					currency: "EUR",
				}).format(num);
			},
		},
	};
</script>

<style></style>
