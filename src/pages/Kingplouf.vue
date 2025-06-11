<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Animation from '@/assets/js/animation.js';

import Header from '@/components/Header.vue'
import BackLink from '@/components/BackLink.vue'
import Video from '@/components/Video.vue'
import ProjectsInfos from '@/components/ProjectsInfos.vue'
import ProjectsImg from '@/components/ProjectsImg.vue'
import NextsProjects from '@/components/NextsProjects.vue'

import kingPloufImg from '@/assets/img/kingplouf/mockupKP.png'

import img1 from '@/assets/img/kingplouf/kp1.png'
import img2 from '@/assets/img/kingplouf/kp2.png'
import img3 from '@/assets/img/kingplouf/mockupKP.png'

import imgNext1 from '@/assets/img/sdtraining/run.jpg'
import imgNext2 from '@/assets/img/sound3d/sound3d.jpeg'

import { onMounted, onUnmounted } from 'vue'



gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  Animation.init();
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container-3",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + window.innerWidth * (sections.length - 1)
    }
  });

  window.addEventListener("load", ScrollTrigger.refresh);
});

onUnmounted(() => {
  Animation.destroy();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})


</script>

<template>
  <header>
    <Header msg="KING PLOUF" extraClass="titleSecond" subtitle="Web app for connected toilets"/>
    <BackLink />
  </header>

  <main>
    <Video :imgSrc="kingPloufImg"/>

    <ProjectsInfos 
      link="https://github.com/gaspoorf/KingPlouf" 
      linkTitle="Visit GitHub"  
      :tools="['Php', 'Js', 'Raspberry PI', 'Arduino']" 
      context="School project" 
      :roles="['Frontend', 'Backend', 'Design']" 
      duration="2 weeks" 
      year="2024" 
      description="I took part in the creation of King Plouf, a web app for connected toilets.
                    King Plouf allows people going to the toilet to choose their own background music.<br/><br/>
                    By logging in to an account, the user chooses a theme, which will play music from the list of available types, through a loudspeaker installed in the ceiling of the toilet. LED ribbons will also light up according to the chosen theme.
                    Connected to a Raspberry installed in the false ceiling, which in turn is connected to a loudspeaker and LEDs, users can enjoy a delightful experience during a trip to the toilet.
                    Once they have finished, users can, if they wish, enter their reign in history. They will then appear in the ranking of all kings. So the competition for the longest reign is on!"
    />

    <ProjectsImg 
      :imagesLink="[img1, img2, img3]" 
      extraClass="container-3"
    />

    <NextsProjects 
      link1="sdtraining" 
      link2="sound3d"
      :image1="imgNext1"
      :image2="imgNext2"
      name1="SD Training"
      name2="Sound 3D"
    />
    
  </main>
</template>


<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

