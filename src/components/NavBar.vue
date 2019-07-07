<template>
    <div class="full-height">
        
        <particles-j-s class="particles"></particles-j-s>
        <b-nav vertical class="top">
            <b-img fluid rounded='circle' id="portrait" :src="require('../assets/jonathan.jpg')" alt="Jonathan Kvist" />
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
    width: 100%
}


.top {
    padding-top: 10%;
    opacity: 0.99;
    pointer-events:none;
}
.particles{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #623e88;
}
.navigation {
    opacity: 0.99;
    pointer-events:none;
    font-size:100%;
    margin: 70% auto;
}
a {
    color: inherit;
}
.nav-item{
    color: white;
    font-size: 2vw;
    opacity: 0.99;
    pointer-events:auto;
    font-weight: 300;
}
a:hover {
    color: white;
}

#portrait {
    margin: 0px auto;
    padding-top: 10%;
    border-radius: 50%;
    width: 85%;
}

.col-2 {
    padding: 0;
}

</style>


