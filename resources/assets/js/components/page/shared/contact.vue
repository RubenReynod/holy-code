<template lang="html">
    <div id="contact" v-bind:class="{ active : statusContact }">
        <div class="top">
            <div class="logo" color="white">
                <svgicon name="logo"></svgicon>
            </div>
            <div class="btn_close" v-on:click="statusContact=false">
                <p>Cerrar<i class="fas fa-times"></i></p>
            </div>
        </div>
        <form class="row align-items-center center" v-on:submit.prevent="sendMail($event.target)">
            <nav class="col-md-3">
                <ul>
                    <li v-bind:class="{ active : mail.name != '' }" v-on:click=" btnForm = 'name' ">Nombre</li>
                    <li v-bind:class="{ active : mail.factory != '' }" v-on:click=" btnForm = 'factory' ">Empresa</li>
                    <li v-bind:class="{ active : mail.budget != '' }" v-on:click=" btnForm = 'budget' ">Presupuesto</li>
                    <li v-bind:class="{ active : mail.phone != '' }" v-on:click=" btnForm = 'phone' ">Teléfono</li>
                    <li v-bind:class="{ active : mail.email != '' }" v-on:click=" btnForm = 'email' ">Correo Electrónico</li>
                    <li v-bind:class="{ active : mail.service != '' }" v-on:click=" btnForm = 'service' ">Servicio</li>
                    <li v-bind:class="{ active : mail.contact != '' }" v-on:click=" btnForm = 'contact' ">Contacto</li>
                </ul>
            </nav>
            <div class="col-md-9">
                <div class="question" v-show="  btnForm == 'name' ">
                    <p>Hola :) Cual es tu Nombre</p>
                    <input type="text" placeholder="Nombre,Apellidos" v-model="mail.name">
                </div>
                <div class="question" v-show=" btnForm == 'factory' ">
                    <p>Cual es el nombre de tu empresa?</p>
                    <input type="text" placeholder="Nombre de la empresa" v-model="mail.factory">
                </div>
                <div class="question" v-show=" btnForm == 'budget' ">
                    <p>Cual es tu presupuesto?</p>
                    <div class="btn_radio" v-bind:class="{ active : mail.budget == '5,000' }">
                       <label>5,000</label>
                       <input type="radio" v-model="mail.budget" value="5,000">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.budget == '5,000 - 10,000' }">
                       <label>5,000 - 10,000</label>
                       <input type="radio" v-model="mail.budget" value="5,000 - 10,000">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.budget == '10,000 - 25,000' }">
                       <label>10,000 - 25,000</label>
                       <input type="radio" v-model="mail.budget" value="10,000 - 25,000">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.budget == '25,000 - 50,000' }">
                       <label>25,000 - 50,000</label>
                       <input type="radio" v-model="mail.budget" value="25,000 - 50,000">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.budget == '50,000 +' }">
                       <label>50,000 +</label>
                       <input type="radio" v-model="mail.budget" value="50,000 +">
                    </div>
                </div>
                <div class="question" v-show=" btnForm == 'phone' ">
                    <p>Cual es tu teléfono?</p>
                    <input type="number" placeholder="Número de telefóno" v-model="mail.phone">
                </div>
                <div class="question" v-show=" btnForm == 'email' ">
                    <p>Cual es tu correo electrónico?</p>
                    <input type="email" placeholder="tucorreo@holy-code.com" v-model="mail.email">
                </div>
                <div class="question" v-show=" btnForm == 'service' ">
                    <p>Estas interesado en ?</p>
                    <div class="btn_radio" v-bind:class="{ active : mail.service == 'Web Sites' }">
                     <label>WEBSITES</label>
                        <input type="radio" v-model="mail.service" value="Web Sites">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.service == 'Branding' }">
                     <label>BRANDING</label>
                        <input type="radio" v-model="mail.service" value="Branding">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.service == 'Redes Sociales' }">
                     <label>REDES SOCIALES</label>
                        <input type="radio" v-model="mail.service" value="Redes Sociales">
                    </div>
                    <div class="btn_radio" v-bind:class="{ active : mail.service == 'Aplicación' }">
                     <label>APLICACIÓN</label>
                        <input type="radio" v-model="mail.service" value="Aplicación">
                    </div>
                </div>
            </div>
            <div class="col-md-9 offset-md-3">
                <button type="submit" class="btn_">ENVIAR<i class="fas fa-arrow-right"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            statusContact: false,
            btnForm : 'name',
            mail: {
                name : '',
                factory: '',
                budget: '',
                phone: '',
                email: '',
                service: '',
                contact: ''
            }
        }
    },
    methods: {
        sendMail : function(form){
            let params = tools.params(form,this.mail);
            const config = { header : { 'Content-Type' : 'multipart/form-data' } }
            axios.post(tools.url('/api/contact'),params,config).then( (resp) =>{
                console.log('se envio');
            }).catch( (error) => {
                console.log('Error');
            });
        }
    }
}
</script>
