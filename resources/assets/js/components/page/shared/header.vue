<template>
    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <div class="logo">
                        <svgicon name="logo"></svgicon>
                    </div>
                </div>
                <div class="col-2">
                    <div class="bars"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script type="text/javascript">
	export default {
        mounted() {
            console.log('Header mounted.');
        }
    }
</script>