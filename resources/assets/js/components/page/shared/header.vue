<template>
    <header id="header">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-md-3 align-self-center logo">
                    <router-link to="/" tag="img" src="public/images/logo.png"></router-link>
                </div>
                <div class="col-md-9 menu">
                    <nav class="navbar justify-content-end navbar-expand h-100">
                        <ul class="navbar-nav">
                            <router-link class="nav-link" to="/" tag="li">SERVICIOS</router-link>
                            <router-link class="nav-link" to="/" tag="li">NOSOTROS</router-link>
                            <router-link class="nav-link" to="/" tag="li">PORTAFOLIO</router-link>
                            <router-link class="nav-link" to="/" tag="li">CONTACTO</router-link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script type="text/javascript">
	export default {
    }
</script>
