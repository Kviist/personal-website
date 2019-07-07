<template>
    <div class="full-height">
        <particles-j-s class="full-height-and-width"></particles-j-s>
        <img id="portrait" src="../assets/jonathan.jpg" alt="Jonathan Kvist">
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
    z-index: -1;
    background-color: #623e88;
}
.navigation {
    padding-top: 200%;
}
a {
    color: inherit;
}
.nav-item{
    color: #c4c7cc;
    font-size: 150%;
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


