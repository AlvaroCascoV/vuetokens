<template>
	<div>
		<div class="container mt-4">
			<h2 class="mb-4">Mis Subordinados</h2>

			<div
				class="table-responsive"
				v-if="subordinados && subordinados.length > 0"
			>
				<table class="table table-striped table-hover">
					<thead class="table-success">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Apellido</th>
							<th scope="col">Oficio</th>
							<th scope="col">Salario</th>
							<th scope="col">Director</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="empleado of subordinados" :key="empleado">
							<td>{{ empleado.idEmpleado }}</td>
							<td>{{ empleado.apellido }}</td>
							<td>{{ empleado.oficio }}</td>
							<td>
								{{ empleado.salario }}
							</td>
							<td>{{ empleado.director }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="alert alert-info text-center" role="alert" v-else>
				No tienes subordinados asignados.
			</div>
		</div>
	</div>
</template>

<script>
	import ServiceEmpleados from "@/services/ServiceEmpleados";
	let service = new ServiceEmpleados();
	export default {
		name: "SubordinadosComponent",
		data() {
			return {
				subordinados: [],
			};
		},
		mounted() {
			this.getSubs();
		},
		methods: {
			getSubs() {
				service.getSubordinados().then((result) => {
					this.subordinados = result;
				});
			},
		},
	};
</script>

<style></style>
