<script setup>
    defineProps({
        link1: {
            type: String,
            required: true
        },
        link2: {
            type: String,
            required: true
        },
        image1: {
            type: String,
            required: true
        },
        image2: {
            type: String,
            required: true
        },
        name1: {
            type: String,
            required: true
        },
        name2: {
            type: String,
            required: true
        },
    })
</script>


<template>

    <section class="next-section">
        <div class="flex-col">
            <div class="flex-row font-larg">
                <p>PLUS DE PROJETS</p>
            </div>
        </div>

        <div class="next-projects">
            <div>
                <div class="project magic-hover">
                    <a :href="`/${link1}`" class="project-title">{{ name1 }}</a>
                    <img :src="image1" alt="Image du prochain projet">
                </div>
            </div>
            <div>
                <div class="project magic-hover">
                    <a :href="`/${link2}`" class="project-title">{{ name2 }}</a>
                    <img :src="image2" alt="Image du prochain projet">
                </div>
            </div>
        </div>
        
    </section>

</template>

<style scoped>

    .project {
        width: 500px;
        height: 250px;
        font-size: 65px;
        color: #ffffff;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
        font-family: 'Instrument Serif', serif;
    }

    .project a {
        text-decoration: none;
        color: #ffffff;
        font-family: 'Instrument Serif', serif;
        position: relative;
        z-index: 2; 
        opacity: 0.3; 
        mix-blend-mode: difference;
        /* transition: opacity 0.5s ease-in-out;  */
        cursor: none;
        text-align: center;
        width: 100%;
    }

    
    .next-section{
        margin-top: 5rem;
    }
    .next-projects{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        justify-content: center;
        margin-top: 4rem;
    }

    .next-section p{
        margin: 0;
    }

    .next-projects .project a {
        opacity: 1 !important; 
    }

    .next-projects .project img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    @media (max-width: 768px) {
        .next-projects{
            flex-direction: column;
            gap: 0;
        }

        .next-projects .project {
            width: auto;
            height: 250px;
            margin: 1rem;
        }
    }

</style>