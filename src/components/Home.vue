<template>
<div>
  <vue-mathjax :formula = "data"></vue-mathjax>
</div>
</template>

<script>

import VueMathjax from './vue-mathjax.vue'
export default {
    components: {
        'vue-mathjax': VueMathjax
    },
    name: 'Home',
    data () {
        return {
        data: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
  
</script>