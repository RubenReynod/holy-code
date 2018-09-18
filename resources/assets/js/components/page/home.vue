<template>
    <div id="home">
        <div class="us">
            <div class="title_">
            	<h2 color="green"><span>C</span><span>r</span><span>e</span><span>a</span><span>m</span><span>o</span><span>s</span> soluciones digitales</h2>
            	<h2 color="gray">Marcas, e-commerce y productos digitales</h2>
            </div>
        </div>
        <figure class="us_desc">
            <div class="text">
                <p>Bienvenido a HOLY-CODE <br>Holy-Code es una agencia digital interactiva con sede en Guadalajara, Jalisco.México. Nuestra ambición es seguir mejorando el panorama digital y hacer que la web sea un lugar mejor con un diseño hermoso. Esa es nuestra misión.</p>
            </div>
            <div class="foto" style="background: url('public/images/us/agency.jpg')no-repeat center center; background-size: cover;"></div>
        </figure>
        <div class="works">
        	<div class="title_">
        		<h2 color="green">Trabajos recientes</h2>
        		<h2 color="gray">Nuestros últimos y mejores proyectos.</h2>
        	</div>
        	<div class="row">
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/branding.jpg">
        				<h4><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">Branding</span> </h4>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/website.jpg">
        				<h4><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">WebSite</span> </h4>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/website.jpg">
        				<h4><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">WebSite</span> </h4>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/branding.jpg">
        				<h4><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">Branding</span> </h4>
        			</figure>
        		</div>
        	</div>
        </div>
        <div class="contact">
        	<div class="container">       	
        	    <div class="row">
        		    <div class="col-md-6 offset-md-3 text-center">
        			    <h6>Abrimos Fronteras</h6>
        	            <p>Somos versátiles y trabajamos duro para lograr los objetivos. Nos tomamos el tiempo para cumplir objetivos, siempre entregando productos de calidad y funcionales.</p>
        		    </div>
        	    </div>
            </div>
        </div>
        <div class="back" style="background: url('public/images/background.jpg')no-repeat center center; background-size: cover;"></div>
        <div class="quotation">
        	<div class="title_">
        		<h2 color="green">Hagamos algo increíble.</h2>
        		<h2 color="gray">Comenzar un proyecto</h2>
        	</div>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		methods:{
			ejem : function () {
				var z = document.querySelectorAll('.title_ h2 span');
				z.forEach(function(item,index){
					console.log(item);
				});
			} 
		},
		mounted(){
			this.ejem();
		}
    }
</script>