<script setup>
  import arrowIcon from '@/assets/img/svg/arrow_go.svg'

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })
</script>

<template>

  <section id="about">
    <div class="flex-col">
        <div class="flex-row about font-larg">
            <p v-html="msg" class="text-intro"></p>
            <div class="link">
                <a href="https://www.gaspardhedde.fr/CV_Gaspard_Hedde.pdf" target="_blank" class="underline magic-hover magic-hover__square">
                    Voir mon CV
                    <img :src="arrowIcon" class="arrow-back" alt="arrow back">
                </a>
            </div>
        </div>
    </div>
  </section>

</template>


<style scoped>


  @media (max-width: 768px) {

    .about{
      max-width: 350px;
      word-wrap: break-word;
      overflow-x: hidden;
      overflow-y: hidden;
      overflow: wrap;    
    }
}

</style>
