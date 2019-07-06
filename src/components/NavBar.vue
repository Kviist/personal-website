<template>
    
    <div class="full-height black">
        <div id="particles-js"></div>
        <b-img src="../assets/logo.png" alt="Jonathan Kvist"></b-img>

        <b-nav vertical class="navigation">
            <b-nav-item class="nav-item">Home</b-nav-item>
            <b-nav-item class="nav-item">Publications</b-nav-item>
            <b-nav-item class="nav-item">Projects</b-nav-item>
            <b-nav-item class="nav-item">Contact</b-nav-item>
            <b-nav-item class="nav-item">Blog</b-nav-item>
        </b-nav>
    </div>
</template>

<script src="particles.js"></script>

<script>
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
export default {
    
}
</script>

<style>
.black {
    background-color: #2b2929;
}
.full-height {
    height: 100%;
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

</style>


