<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import Animation from '@/assets/js/animation.js';

  import Header from '@/components/Header.vue'
  import TextIntro from '@/components/TextIntro.vue'
  import Navbar from '@/components/Navbar.vue'

  import Projects from '@/components/Projects.vue'
  import Baseline from '@/components/Baseline.vue'
  import Contact from '@/components/Contact.vue'

  onMounted(() => {
    Animation.init();
  });

  onUnmounted(() => {
    Animation.destroy();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

</script>

<template>
  <header>
    <Header msg="GASPARD HEDDE" />
    <Navbar />
  </header>

    <TextIntro msg="Developpeur creatif passionne<br/> par les nouvelles technologies et le developpement de sites web, d'applications et d'experiences immersives." />

    <Projects />
    <Baseline />
    <Contact />
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

