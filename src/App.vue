<template>
  <div id="app">
    <b-container fluid class="full-height">
        <b-row class="full-height">
            <b-col class="full-height" cols="2">
                <nav-bar class="full-height" />
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import NavBar from './components/NavBar.vue'


export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.full-height, #app, body, html {
  height: 100%;
  margin-bottom: 0;
  padding-left: 0;
}
</style>
