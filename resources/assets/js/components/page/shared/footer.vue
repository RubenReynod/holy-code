<template>
	<footer id="footer">
		<div class="row contact">
			<div class="col-lg-2">
				<p color="gray">info@holy-code.com <br> 02381 780 164 <br> Privada 345. Providencia.</p>
			</div>
			<div class="col-lg-2">
				<p color="green">Siguenos:  
					<span class="network"><i class="fab fa-twitter"></i></span> 
					<span class="network"><i class="fab fa-facebook-f"></i></span>
				</p>
			</div>
			<div class="col-lg-2 offset-lg-6">
				<p class="btn_return" color="green">Regresar</p>
			</div>
		</div>
		<div class="legal row">
			<div class="col-lg-4">
				<p color="gray">© holy-Code. 2018 / Todos los derechos reservados</p>
			</div>
			<div class="col-lg-3">
				<p color="gray">Terminos & Condiciones</p>
			</div>
			<div class="col-lg-3">
				<p color="gray">Politicas de Privacidad</p>
			</div>
		</div>
	</footer>
</template>

<script type="text/javascript">
	export default {
        mounted() {
            console.log('Footer mounted.');
        }
    }
</script>