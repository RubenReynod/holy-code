<template>
    <header id="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-10">
                    <div class="logo">
                        <svgicon name="logo"></svgicon>
                    </div>
                </div>
                <div class="col-2">
                    <div class="bars" v-on:click="statusMenu=true">
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu" v-bind:class="{ active : statusMenu }">
            <div class="top">
                <div class="logo" color="white">
                    <svgicon name="logo"></svgicon>
                </div>
                <div class="btn_close" v-on:click="statusMenu=false">
                    <p>Cerrar<i class="fas fa-times"></i></p>
                </div>
            </div>
            <div class="center">
                <nav>
                    <ul>
                        <li>Portafolio</li>
                        <li>Nuestros Servicos</li>
                        <li>Estudio</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script type="text/javascript">
	export default {
        data(){
            return{
                statusMenu: false
            }
        }
    }
</script>
