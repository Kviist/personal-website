<template>
    <vue-mathjax :formula = "data" class="formula"></vue-mathjax>
</template>

<script>

import {VueMathjax} from 'vue-mathjax'

export default {
    components: {
        'vue-mathjax': VueMathjax
    },
    name: 'Home',
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
        document.head.appendChild(recaptchaScript)
    },
    data () {
        return {
          data: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
          msg: 'Welcome to Your Vue.js App'
        }
    }
}
  
</script>

<style>
.formula, .MathJax_Display {
  z-index: 11;
  pointer-events: auto;
}
</style>
