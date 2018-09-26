<template>
    <div id="home">
        <section class="us">
            <hgroup class="title_">
            	  <h1 color="green"><span>C</span><span>r</span><span>e</span><span>a</span><span>m</span><span>o</span><span>s</span> soluciones digitales</h1>
            	  <h2 color="gray">Marcas, e-commerce y productos digitales</h2>
            </hgroup>
        </section>
        <section class="us_desc parallax">
            <div class="text animation item-parallax layers_right_text">
                <div class="content">
                    <p><b>Bienvenido a HOLY-CODE</b></p>
                    <p>Holy-Code es una agencia digital interactiva con sede en Guadalajara, Jalisco.México. Nuestra ambición es seguir mejorando el panorama digital y hacer que la web sea un lugar mejor con un diseño hermoso. Esa es nuestra misión.</p>
                </div>
            </div>
            <div class="foto item-parallax animation layers_left_foto" style="background: url('public/images/us/agency.jpg')no-repeat center center; background-size: cover;"></div>
        </section>
        <section class="works">
        	<div class="title_">
        		<h2 color="green">Trabajos recientes</h2>
        		<h3 color="gray">Nuestros últimos y mejores proyectos.</h3>
        	</div>
        	<div class="row">
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/branding.jpg">
        				<h3><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">Branding</span> </h3>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/website.jpg">
        				<h3><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">WebSite</span> </h3>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/website.jpg">
        				<h3><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">WebSite</span> </h3>
        			</figure>
        		</div>
        		<div class="col-md-6 work">
        			<figure>
        				<img class="w-100" src="public/images/branding.jpg">
        				<h3><span color="green">Petroleos Inversor</span> <span class="line"></span> <span color="gray">Branding</span> </h3>
        			</figure>
        		</div>
        	</div>
        </section>
        <section class="contact">
        	<div class="container">
        	    <div class="row">
        		    <div class="col-md-6 offset-md-3 text-center">
        			    <h5>Abrimos Fronteras</h5>
        	            <p>Somos versátiles y trabajamos duro para lograr los objetivos. Nos tomamos el tiempo para cumplir objetivos, siempre entregando productos de calidad y funcionales.</p>
                      <button type="button" v-on:click="$root.$refs.contact.statusContact = true" class="btn_">CONTACTO<i class="fas fa-arrow-right"></i></button>
        		    </div>
        	    </div>
            </div>
        </section>
        <div class="back" style="background: url('public/images/background.jpg')no-repeat center center; background-size: cover;"></div>
        <section class="quotation">
        	<div class="title_">
        		<h1 color="green">Hagamos algo increíble.</h1>
        		<h1 color="gray">Comenzar un proyecto</h1>
        	</div>
        </section>
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
