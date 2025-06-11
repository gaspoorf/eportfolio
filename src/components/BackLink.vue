<script setup>
    import arrowBack from '@/assets/img/svg/arrow_back.svg'
</script>

<template>
    
    <div class="back">
        <div class="link">
            <a :href="`/`" class="underline magic-hover magic-hover__square">
                <img :src="arrowBack" class="arrow-back" alt="arrow back">
                Retour
            </a>
        </div>
    </div>

</template>

<style scoped>

.back {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    position: absolute;
    top: 45px;
    left: 10%;
    font-family: 'Aesthetic';
}

.link a{
    text-decoration: none;
    display: flex;
    width: fit-content;
    padding: 10px;
    font-family: 'Archivo Black', sans-serif;
}

.link a:hover .arrow-back{
    transform: translateX(-10px);
    transition: all 0.3s ease-in-out;
}

.arrow-back{
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
}

</style>