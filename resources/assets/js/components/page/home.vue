<template>
    <div id="home">
        <div class="us">
            <div class="title_">
            	<h2 color="green"><span>C</span><span>r</span><span>e</span><span>a</span><span>m</span><span>o</span><span>s</span> soluciones digitales</h2>
            	<h2 color="gray">Marcas, e-commerce y productos digitales</h2>
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