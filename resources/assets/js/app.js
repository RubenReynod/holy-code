
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
//Rutas del website
import Router from './router.js';

//Librerias globales
import Library from './libs.js';
Vue.use(Library);

//Componentes del website
import components from './components/components.js';
Vue.use(components);

window.Vue=Vue;

//Instancia principal
const app = new Vue({
    el: '#app',
    router:Router,
    methods:{
        animations : function(){
        	var time = 0;
            var scroll = window.scrollY;

          // Mostrar elementos al dar scroll
          document.querySelectorAll('.animation:not(.in)').forEach(function(item,index){
              var top = item.getBoundingClientRect().top + window.pageYOffset;
              var windowH = window.innerHeight;
              console.log(top+" - "+(scroll+windowH));
              if (top < (scroll+windowH-100)) {
                  item.style.animationDelay = time+"ms";
                  item.classList.add("in");
                  time = !mounted?time+450:time+100;
              }
          });
        }
    },
    mounted(){
         this.animations;
    },
    created(){
    	window.addEventListener('scroll',this.animations);
    },
    destroyed(){
    	window.addEventListener('scroll',this.animations);
    }
});
