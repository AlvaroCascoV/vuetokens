<template>
	<div>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 text-center">
					<div class="hero-section">
						<h1
							class="display-1 fw-bold text-danger mb-2"
							style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)"
						>
							BIENVENIDOS AL SUFRIMIENTO
						</h1>
						<p class="lead text-dark fst-italic mb-5">
							Sistema de Gestión de Empleados - Donde el trabajo nunca termina
						</p>

						<div class="row g-4 justify-content-center">
							<div class="col-md-4">
								<div class="card shadow-sm h-100 border-0">
									<div class="card-body text-center p-4">
										<div
											class="feature-icon bg-danger bg-gradient text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
											style="width: 60px; height: 60px"
										>
											<i class="bi bi-person-check fs-4"></i>
										</div>
										<h5 class="card-title">Perfil de Usuario</h5>
										<p class="card-text text-muted">
											Tu condena laboral detallada en números y cifras
										</p>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card shadow-sm h-100 border-0">
									<div class="card-body text-center p-4">
										<div
											class="feature-icon bg-dark bg-gradient text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
											style="width: 60px; height: 60px"
										>
											<i class="bi bi-people fs-4"></i>
										</div>
										<h5 class="card-title">Gestión de Equipo</h5>
										<p class="card-text text-muted">
											Porque el sufrimiento compartido es más llevadero
										</p>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card shadow-sm h-100 border-0">
									<div class="card-body text-center p-4">
										<div
											class="feature-icon bg-warning bg-gradient text-dark rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
											style="width: 60px; height: 60px"
										>
											<i class="bi bi-shield-check fs-4"></i>
										</div>
										<h5 class="card-title">Seguridad</h5>
										<p class="card-text text-muted">
											Nadie escapa. Tus horas están bien vigiladas
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="mt-5">
							<router-link
								class="btn btn-danger btn-lg px-5 py-3 me-3"
								to="/login"
							>
								Iniciar Condena
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeComponent",
	};
</script>

<style></style>
