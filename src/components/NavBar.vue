<template>
    <div class="full-height">
        
        <particles-j-s class="full-height-and-width"></particles-j-s>

        <b-nav vertical class="top">
            <b-img fluid rounded='circle' :src="require('../assets/jonathan.jpg')" alt="Jonathan Kvist" />
        </b-nav>\
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


.top {
    padding-top: 10%;
    opacity: 0.99;
    pointer-events:none;
}
.full-height-and-width{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #623e88;
}
.navigation {
    padding-top: 100%;
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

#portrait {
    width: 70%;
    padding-top: 10%;
    border-radius: 50%;
}

</style>


