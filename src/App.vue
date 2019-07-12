<template>
  <div id="app">
    <div class="full-height main-comp">
        <div class="left">
          <div class="full-height left-div">
              <nav-bar class="full-height"/>
          </div>
        </div>
        <div class="right">
          <home v-if="whichCompontent === TABS.HOME"/>
          <example-project v-else-if="whichCompontent === TABS.EXAMPLEPROJECT"/>
        </div>
    </div>
  </div>
</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></script>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import ExampleProject from './components/projects/ExampleProject.vue'
import {tabs} from './tabs.js'
Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: {
    NavBar,
    Home,
    ExampleProject
  },
  data: () => {
    return {
      TABS: tabs
    }
  }, 
  computed: {
    whichCompontent () {
      return this.$store.getters.getCurrentPage
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, 'Avenir', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: scroll;
  /* pointer-events: none; */
}

.full-height {
  height: 100%;
  overflow: hidden;
}

.main-comp {
  display: flex;
}

.left {
  width: 16rem;
  display: inline-block;
}

.left-div {
  width: 16rem;
  padding: 0;
}

.right {
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
  display: inline-block;
  z-index: 10;
}

@media screen and (max-width: 768px) {
    .left, .left-div, .right{
        width: 100%;
        height: auto;
        overflow: scroll;
    }

    .main-comp {
      flex-flow: row wrap;
    }

}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>
