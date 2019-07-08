<template>
<div>
  <vue-mathjax :formula="formula"></vue-mathjax>
</div>
</template>

<script>

import {VueMathjax} from 'vue-mathjax'
export default {
  components: {
    VueMathjax
  },
  created() {
    let ckeditor = document.createElement('script');
    ckeditor.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML");
    document.head.appendChild(ckeditor);
},
  data () {
    return {
      formula: '$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>