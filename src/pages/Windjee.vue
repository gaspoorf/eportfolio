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

import windjeeVideo from '@/assets/videos/windjee.mp4'

import img1 from '@/assets/img/windjee/w3.png'
import img2 from '@/assets/img/windjee/w2.png'
import img3 from '@/assets/img/windjee/w4.png'
import img4 from '@/assets/img/windjee/w1.png'

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
    <Header msg="WINDJEE" extraClass="titleSecond" subtitle="Website for an IT consulting firm"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="windjeeVideo" />

    <ProjectsInfos 
      link="https://www.windjee.fr/" 
      linkTitle="Visit website"  
      :tools="['GSAP', 'SWUP', 'Js', 'Php', 'SCSS', 'Tailwind', 'WordPress', 'Timber', 'Twig']" 
      context="Here we com agency" 
      :roles="['Frontend', 'Backend']" 
      duration="2 weeks" 
      year="2024" 
      description="I developed this website during my work-study program at the Here We Com agency, to showcase Windjee’s expertise in managing IT projects and optimizing business systems.
                    The site highlights Windjee’s structured and technical approach through a clean, modern, and fluid interface. The visual experience supports clarity, efficiency, and performance.<br/><br/>
                    I implemented Three.js and GSAP animations and a custom slider in the form of interactive cards, bringing an engaging and dynamic rhythm to the navigation. Seamless page transitions are handled with Swup.js to ensure a smooth and continuous user experience.
                    I was responsible for the entire development process, from integration to deployment, with a strong focus on performance and accessibility. This project allowed me to push further into creative development while meeting real-world functional and technical requirements in the IT consulting space."
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

