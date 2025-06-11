<script setup>
    import arrowIcon from '@/assets/img/svg/arrow_go.svg'

    defineProps({
        link: {
            type: String,
            required: true
        },
        linkTitle: {
            type: String,
            required: true
        },
        Secondlink: {
            type: String,
            required: true
        },
        SecondlinkTitle: {
            type: String,
            required: true
        },
        tools: {
            type: Array,
            required: true
        },
        skills: {
            type: Array,
            required: true
        },
        context: {
            type: String,
            required: true
        },
        roles: {
            type: Array,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    })
</script>

<template>

    <section>
        <div class="projects-container flex-row">
            <div class="projects-infos">

                <div class="link flex-row">
                    <a :href="link" target="_blank" class="underline magic-hover magic-hover__square">
                        {{ linkTitle }}
                        <img :src="arrowIcon" class="arrow-back" alt="arrow back">
                    </a>
                    <a :href="Secondlink" v-if="Secondlink" target="_blank" class="underline magic-hover magic-hover__square">
                        {{ SecondlinkTitle }}
                        <img :src="arrowIcon" class="arrow-back" alt="arrow back">
                    </a>
                </div>

                <div class="tools">
                    <p class="pr-name">TECHNOS</p>
                    <div class="tools-container">
                        <span v-for="tool in tools" :key="tool">{{ tool }}</span>
                    </div>
                </div>

                <div class="flex-row align-start">
                    <div class="flex-column">
                        <div class="flex-column">
                            <p class="pr-name">CONTEXTE</p>
                            <span>{{ context }}</span>
                        </div>
                        <div class="flex-column">
                            <p class="pr-name">RÔLES</p>
                            <span v-for="role in roles" :key="role">{{ role }}</span>
                        </div>
                    </div>

                    <div class="flex-column">
                        <div class="flex-column">
                            <p class="pr-name">DUREE</p>
                            <span>{{ duration }}</span>
                        </div>
                        <div class="flex-column">
                            <p class="pr-name">ANNEE</p>
                            <span>{{ year }}</span>
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="projects-text">
                <p v-html="description"></p>

                <div class="tools" v-if="skills">
                    <p class="pr-name">COMPETENCES</p>
                    <div class="flex-column">
                        <span v-for="skill in skills" :key="skill">{{ skill }}</span>
                    </div>
                </div>
            </div>

           
        </div>
    </section>

</template>

<style scoped>
    .projects-infos{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 35%;
    }

    .projects-infos .flex-column{
        margin-bottom: 1rem;
    }

    .projects-infos .link a{
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    .projects-infos .link a:hover .arrow-back{
        transform: translateX(10px);
    }

    .projects-text{
        line-height: 23px;
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .projects-text p{
        margin: 0;
    }

    .pr-name{
        opacity: 0.7;
        margin-bottom: 0.25rem;
    }

    .tools{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .tools-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
    }

    .tools-container span{
        border: 0.5px solid #ffffff;
        border-radius: 50px;
        padding: 0.2rem 0.5rem;
    }

    .context-container{
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .flex-row{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .flex-column{
        display: flex;
        flex-direction: column;
    }


    .projects-container{
        align-items: flex-start;
        max-width: 62rem;
        margin: 0 auto;
        gap: 4rem;
        padding-right: 106px;
        padding-left: 7rem;
    }


    @media (max-width: 950px) {
        .projects-container{
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        .projects-container{
            padding-right: 1rem;
            padding-left: 1rem;
        }

        .next-projects{
            flex-direction: column;
            gap: 0;
        }

        .next-projects .project {
            width: auto;
            height: 250px;
            margin: 1rem;
        }

        .tools-container{
            max-width: 100%;
        }

        .projects-infos{
            width: 100%;
        }

        .projects-text{
            width: 100%;
        }
        
    }

</style>