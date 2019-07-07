<template>
    <div class="full-height">
        
        <particles-j-s class="particles"></particles-j-s>
        <b-nav vertical class="top">
            <b-img fluid rounded='circle' id="portrait" :src="require('../assets/jonathan.jpg')" alt="Jonathan Kvist" />
            <div id="names">
                <p class="name">Jonathan</p>
                <p class="name">Kvist</p>
            </div>
        </b-nav>
        <b-nav vertical class="navigation">

            <b-nav-item class="nav-item" >Home</b-nav-item>


            <b-nav-item v-b-toggle.collapse-projects class="nav-item">Projects</b-nav-item>

            <b-collapse id="collapse-projects" class="nav-item">
                <b-nav-item class="sub-nav-item">1</b-nav-item>
                <b-nav-item class="sub-nav-item">2</b-nav-item>
            </b-collapse>


            <b-nav-item class="nav-item">Publications</b-nav-item>


            <b-nav-item v-b-toggle.collapse-blog class="nav-item">Blog</b-nav-item>

            <b-collapse id="collapse-blog" class="nav-item">
                <b-nav-item class="sub-nav-item">1</b-nav-item>
                <b-nav-item class="sub-nav-item">2</b-nav-item>
            </b-collapse>


            <b-nav-item class="nav-item">Contact</b-nav-item>
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
    position: relative;
    text-align: left;
    width: 60%;
    padding-top: 10rem;
}
a, p{
    color: white;
    font-weight: 200;
}

#names {
    padding-top: 0.3rem;
}

.name {
    font-size: 2rem;
    padding-top: 2rem;
    font-weight: 200;
    padding-top: 0.5rem;
    padding-bottom: 0;
}
.nav-item{
    font-size: 1.5rem;
    opacity: 0.99;
    pointer-events:auto;
}
.sub-nav-item{
    font-size: 1.5rem;
    opacity: 0.99;
    pointer-events:auto;
    text-indent: 1.5rem; 
}
a:hover {
    color: white;
}

#portrait {
    margin: 0px auto;
    padding-top: 10%;
    border-radius: 50%;
    width: 60%;
}

.col-2 {
    padding: 0;
}

</style>


