<script setup>
    defineProps({
        imagesLink: {
            type: Array,
            required: true
        },
        extraClass: {
            type: String,
            default: '',
        }
    })
</script>

<template>

    <section>
        <div :class="[extraClass]">
            
            <div v-for="link in imagesLink" class="panel" :key="link">
                <img :src="link" alt="Image du projet" width="70%" height="auto" >
            </div>

        </div>
    </section>

</template>

<style scoped>

    .container-3 {
        width: 300%;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
    }

    .container {
        width: 400%;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
    }

    .panel{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .panel img{
        aspect-ratio: 16/8.2;
        object-fit: cover;
        overflow: hidden;
    }
 
</style>