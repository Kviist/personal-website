<template>
    <div class="">
        <particles-j-s class="particles"></particles-j-s>
        <b-nav vertical class="top">
            <b-img fluid rounded='circle' id="portrait" :src="require('../assets/jonathan.jpg')" alt="Jonathan Kvist" />
            <div id="names">
                <p class="name">Jonathan</p>
                <p class="name">Kvist</p>
            </div>
        </b-nav>
        <b-nav vertical class="navigation">

            <b-nav-item class="nav-item" @click="setCurrentProject(TABS.HOME)">Home</b-nav-item>


            <b-nav-item class="nav-item" @click="setCurrentProject(TABS.PROJECTHUB);goTo('projects')">Projects</b-nav-item>

            <b-collapse id="collapse-projects"  v-bind:visible="projects_bind" class="nav-item" >
                <b-nav-item class="sub-nav-item"  @click="setCurrentProject(TABS.EXAMPLEPROJECT)"><span :class="exampleProjectActive ? 'highlight' : 'non-highlight'"> Example Project </span></b-nav-item>
                <b-nav-item class="sub-nav-item" @click="setCurrentProject(TABS.ONNXDEMO)">Onnx</b-nav-item>
            </b-collapse>


            <b-nav-item class="nav-item">Publications</b-nav-item>


            <b-nav-item @click="goTo('blog')" class="nav-item">Blog</b-nav-item>

            <b-collapse id="collapse-blog" v-bind:visible="blog_bind" class="nav-item">
                <b-nav-item class="sub-nav-item">1</b-nav-item>
                <b-nav-item class="sub-nav-item">2</b-nav-item>
            </b-collapse>

            <b-nav-item class="nav-item">Contact</b-nav-item>
            <div class="icons">
                 <img src="../assets/_ionicons_svg_md-mail.svg" class="icon" alt="Mail icon" v-b-tooltip.hover.bottom title="Email me" @click="openInNewTab('mailto:jonathan.kvist@gmail.com')">
                 <img src="../assets/_ionicons_svg_logo-linkedin.svg" class="icon" alt="Linkedin icon" v-b-tooltip.hover.bottom title="Linked in profile" @click="openInNewTab('https://linkedin.com/in/jonathan-kvist')">
                 <img src="../assets/_ionicons_svg_logo-github.svg" class="icon" alt="Github icon" v-b-tooltip.hover.bottom title="GitHub page" @click="openInNewTab('https://github.com/kviist')">
            </div>
        </b-nav>
    </div>
</template>

<script>
import ParticlesJS from './ParticlesJS.vue'
import {tabs} from '../tabs.js'

export default {
    components: {
        ParticlesJS
    },
    data: () => {
        return {
            TABS: tabs,
            blog_bind: false,
            projects_bind: false
        }
    },
    computed: {
        exampleProjectActive () {
            return this.$store.getters.getCurrentPage === this.TABS.EXAMPLEPROJECT
        }
    },
    methods: {
        openInNewTab: function (page) {
            window.open(page);
        },
        setCurrentProject: function (currentProject) {
            this.$store.commit('setCurrentProject', currentProject)
        },
        goTo(navTab){
            if(navTab === 'blog'){
                this.blog_bind = true
                this.projects_bind = false
            } else if (navTab == 'projects') {
                this.blog_bind = false
                this.projects_bind = true
            }

        }
    }
}
</script>

<style>
.full-height {
    height: 100%;
    width: 100%;
}

.top {
    opacity: 0.99;
    pointer-events:none;
    margin-top: 1rem;
}
.particles{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: rgb(36, 34, 34);
    pointer-events: all;
}

.navigation {
    opacity: 0.99;
    font-size:100%;
    text-align: left;
    pointer-events: auto;
    width: 60%;
    float: left;
}
.highlight {
    font-weight: bold;
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
    letter-spacing: 2px;
}
.nav-item{
    font-size: 1.5rem;
    opacity: 0.99;
}
.sub-nav-item{
    font-size: 1.2rem;
    opacity: 0.99;
    pointer-events:auto;
    margin-left: 1.5rem;
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

.icons{
    display: flex;
    padding: 0.5rem 1rem;
    pointer-events:auto;
    flex: 0 0 auto;
}

.icon {
    width: 25%;
    fill: white;
}

#app, body, .full-height, .main-comp, .left, .left-div {
    pointer-events: none;
}

.icon:hover {
    cursor: pointer;
}


.right, #MathJax_MenuFrame{
    pointer-events: all !important;
}



@media screen and (max-width: 768px) {
    .navigation {
        margin: 0 auto;
        text-align: center;
        padding: 10vh;
        float: none;
        width: 100%;
    }

    .sub-nav-item {
        margin: 0;
    }

    .icons {
        align-items: center;
        justify-content: center;
    }

    .icon{
        width: 15%;
        text-align: center;
    }

    #portrait {
        width: 40%;
    }

}

</style>


