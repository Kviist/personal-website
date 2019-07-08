<template>
<div>
  <VueMathjax :formula="formula"></VueMathjax>
</div>
</template>

<script>

import {VueMathjax} from './vue-mathjax.vue'
export default {
    components: {
        VueMathjax
    }
}
  
</script>