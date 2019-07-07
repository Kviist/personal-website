<template>
    <div class="full-height">
        
        <b-img src="../assets/logo.png" alt="Jonathan Kvist"></b-img>

        <particles-j-s class="full-height-and-width"></particles-j-s>

        <b-nav vertical class="navigation">
            <b-nav-item class="nav-item">Home</b-nav-item>
            <b-nav-item class="nav-item">Publications</b-nav-item>
            <b-nav-item class="nav-item">Projects</b-nav-item>
            <b-nav-item class="nav-item">Contact</b-nav-item>
            <b-nav-item class="nav-item">Blog</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
import ParticlesJS from './ParticlesJS.vue'

export default {
    components: {
        ParticlesJS
    }
}
</script>

<style>
.full-height {
    height: 100%;
}

.full-height-and-width{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #623e88;
}
.navigation {
    padding-top: 200%;
    opacity: 0.99;
    pointer-events:none;
}
a {
    color: inherit;
}
.nav-item{
    color: #c4c7cc;
    font-size: 150%;
    opacity: 0.99;
    pointer-events:auto;
}
a:hover {
    color: white;
}

</style>


