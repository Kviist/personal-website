<template>
    <vue-markdown>am a ~~tast~~ **test**.</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    components: {
        VueMarkdown
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
p {
    color:black !important;
}
</style>

