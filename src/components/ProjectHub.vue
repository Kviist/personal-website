<template>
    <div class="project-div">
        <ul class="list-unstyled">
            <b-media tag="li">
                <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Letinus Jonathaninus
                </p>
            </b-media>
        </ul>
    </div>
    
</template>

<script>
export default {
    components: {
    
    },
    name: 'Project',
    mounted() {
    },
    data () {
        return {

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

</style>