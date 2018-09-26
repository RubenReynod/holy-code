
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
    data(){
        return{
            scrollTop: 0
        }
    },
    methods:{
        show : function(){
          var scrollVal = window.scrollY;
          var windowH = window.innerHeight;
          // Mostrar elementos al dar scroll
          var itemsToShow = document.querySelectorAll('.animation:not(.in)');
          if (itemsToShow.length > 0)
          itemsToShow.forEach(function(item,index){
              var itemTop = item.getBoundingClientRect().top + window.pageYOffset;
              var itemH = item.offsetHeight;
              if ((itemTop+itemH-100) < (scrollVal+windowH)) {
                  item.classList.add("in");
              }
          });

          // Parallax
          var banner = document.querySelector('.back');
          var itemTop = banner.getBoundingClientRect().top + window.pageYOffset;
          var itemH = banner.offsetHeight;
          if ((150+(100 * (scrollVal - itemTop)) / itemH) > 0)
              banner.style.backgroundPositionY = (50+((100 * (scrollVal - itemTop)) / itemH) / 2) + "%";

          //var items = document.querySelectorAll('.parallax');
              //var that = this;
              //var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
              //items.forEach(function(item,index){
                  //var itemTop = item.getBoundingClientRect().top + window.pageYOffset;
                  //var itemH = item.offsetHeight;
                  //var childs = item.querySelectorAll('.item-parallax');
                  //childs.forEach(function(item,index){
                      //var styleTop = window.getComputedStyle(item).getPropertyValue('top');
                      //styleTop = styleTop.replace('px','');
                      //item.style.top = (styleTop+(-0.2 * itemTop))+"px";
                      /*if (that.scrollTop > currentPosition && parseInt(styleTop) < (itemH + 100)) {
                          item.style.top = (parseInt(styleTop) + 1)+"px";
                      }else if(that.scrollTop < currentPosition && parseInt(styleTop) > -100){
                          item.style.top = (parseInt(styleTop) - 1)+"px";
                      }*/

                  //});
                  //that.scrollTop = currentPosition;
              //});

        }
    },
    mounted(){
         this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         this.show;
    },
    created(){
    	   document.addEventListener('scroll',this.show);
    },
    destroyed(){
    	   document.removeEventListener('scroll',this.show);
    }
});
