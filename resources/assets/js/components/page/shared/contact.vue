<template lang="html">
    <div id="contact" v-bind:class="{ active : statusContact }">
        <div class="top">
            <div class="logo">
                <svgicon name="logo"></svgicon>
            </div>
            <div class="btn_close" v-on:click="statusContact=false">
                <p>Cerrar<i class="fas fa-times"></i></p>
            </div>
        </div>
        <div class="row align-items-center center">
            <nav class="col-md-3">
                <ul>
                    <li>Nombre</li>
                    <li>Empresa</li>
                    <li>Presupuesto</li>
                    <li>Teléfono</li>
                    <li>Correo Electrónico</li>
                    <li>Servicio</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <div class="col-md-9">
                <div class="question">
                    <p>Hola :) Cual es tu Nombre</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <!--<div class="question">
                    <p>Cual es el nombre de tu empresa?</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <div class="question">
                    <p>Cual es tu presupuesto?</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <div class="question">
                    <p>Cual es tu teléfono?</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <div class="question">
                    <p>Cual es tu correo electrónico?</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <div class="question">
                    <p>Estas interesado en ?</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>
                <div class="question">
                    <p>Hola :) Cual es tu Nombre</p>
                    <input type="text" placeholder="Nombre,Apellidos" required>
                </div>-->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            statusContact: false
        }
    }
}
</script>
