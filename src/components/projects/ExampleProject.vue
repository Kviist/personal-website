<template>
    <div class="project-div">
        <p class = "h3 text">
            Complex Analysis
        </p>
        <p class = "h5 text">
            The Cauchy-Reimann Theorem
        </p>
        <p class = "p text">
            <strong>Theorem 1: Cauchy-Reimann Theorem: </strong> <vue-mathjax :formula = "cauchyReimann" class="formula"></vue-mathjax> 
        </p>
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
          cauchyReimann : 'Let $A \\subseteq \\mathbb{C}$ be an open set, $z_0 \\in A$, and let $f: A \\rightarrow \\mathbb{C}$ where $f = u+iv\\ (u,v:\\mathbb{R}^2 \\rightarrow \\mathbb{R})$. Then $f$ is analytic at $z_0$ if and only there is a neighbourhood $N \\subseteq A of z_0$ for which:'
        }
    }
}
  
</script>

<style scoped>
.project-div{
    width: 80%;
    margin: 3% auto;
    color:black;
}



.h1{
    font-size: 2.875em;
    text-align: center;

}

.h2{
    font-size: 2.875em;
    text-align: center;

}

.h3{
    font-size: 1.875em;
    text-align: center;

}

.h4{
    font-size: 1.675em;
    text-align: left;
}

.h5{
    font-size: 1.375em;
    text-align: left;
}

.p{
    font-size: 0.875em;
    text-align: left;
}

.text {
    color:black;
}

.bold{
    font-weight: bold;
}

.formula, .MathJax_Display {
  z-index: 11;
  pointer-events: auto;
}
</style>