<template>
    <div class="project-div">
        <ul class="list-unstyled">
            <b-media tag="li">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in Donec lacinia congue felis in Donec lacinia congue felis in Donec lacinia congue felis in<vue-mathjax :formula = "inline" class="formula"></vue-mathjax> faucibus.
                </p>
                 <vue-mathjax :formula = "data" class="formula"></vue-mathjax>
            </b-media>
        </ul>
    </div>
    
</template>

<script>

import {VueMathjax} from 'vue-mathjax'

export default {
    components: {
        'vue-mathjax': VueMathjax
    },
    name: 'Project',
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
        document.head.appendChild(recaptchaScript)
    },
    data () {
        return {
          data: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
          inline: '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$',
        }
    }
}
  
</script>

<style scoped>
.project-div{
    width: 80%;
    margin: 3% auto;
}

p, h5 {
    color: black;
}
.formula, .MathJax_Display {
  z-index: 11;
  pointer-events: auto;
}
</style>