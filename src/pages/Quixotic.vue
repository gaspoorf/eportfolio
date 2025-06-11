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

import quixoticVideo from '@/assets/videos/quixotic.mp4'

import img1 from '@/assets/img/quixotic/aq1.png'
import img2 from '@/assets/img/quixotic/aq2.png'
import img3 from '@/assets/img/quixotic/aq3.png'
import img4 from '@/assets/img/quixotic/aq4.png'

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
      trigger: ".container",
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
    <Header msg="ATELIER QUIXOTIC" extraClass="titleSecond" subtitle="Website for a black-smith"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="quixoticVideo" />

    <ProjectsInfos 
      link="https://sound3d.vercel.app/" 
      linkTitle="Visit website"  
      :tools="['WordPress', 'Timber', 'Twig', 'Php', 'Js', 'SCSS', 'GSAP', 'Tailwind']" 
      context="Here we com agency" 
      :roles="['Frontend', 'Backend']" 
      duration="2 weeks" 
      year="2024" 
      description="I developed this site for a small forge in Savoie. The client didn't have a big budget, but he wanted something simple and modern.<br/><br/>
                        The challenge was to create a simple site, and add a little originality with animations and effects. All the while staying in the world and the colours of fire and metal, to feel the atmosphere of the forge...
                        This project enabled me to improve my knowledge of GSAP and the frontend in general. But it also allowed me to work on a project with a tight deadline.<br/><br/>
                        Based on Wordpress, all the site's content is manageable.
                        Each block has been developed to be adaptable not only in terms of content, but also in terms of colours and pictograms, and can be animated or not, depending on the client's choice."
    />

    <ProjectsImg 
      :imagesLink="[img1, img2, img3, img4]" 
      extraClass="container"
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

