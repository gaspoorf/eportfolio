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

import sound3dVideo from '@/assets/videos/sound3d.mp4'

import img1 from '@/assets/img/sound3d/s30.png'
import img2 from '@/assets/img/sound3d/s31.png'
import img3 from '@/assets/img/sound3d/s32.png'
import img4 from '@/assets/img/sound3d/s33.png'

import imgNext1 from '@/assets/img/sdtraining/run.jpg'
import imgNext2 from '@/assets/img/quixotic/fire.jpg'

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
    <Header msg="SOUND 3D" extraClass="titleSecond" subtitle="Expérience musicale immersive"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="sound3dVideo" />

    <ProjectsInfos 
      link="https://sound3d.vercel.app/" 
      linkTitle="Voir le site"  

      Secondlink="https://github.com/gaspoorf/Sound3D" 
      SecondlinkTitle="Voir le github"  

      :tools="['Vue.js', 'Three.js', 'WebGL', 'GSAP', 'Node.js', 'API Deezer']" 

      :skills="[
        'C.E 4.0 3 : Code fonctionnel, sobre et réutilisable.',
        'C.E 4.0 4 : Utilisation de Git.', 
        'C.E 5.0 1 : Veille technologique, découverte de Three.js.', 
        'AC 34.01 : Framework côté client, Vue.js', 
        'AC 34.05 : Hébergement et déploiement avec Vercel', 
        'AC 35.02 : Qualité en projet Web, soin apporté à la fluidité et à l’expérience utilisateur.'
      ]" 

      context="Projet personnel" 
      :roles="['Frontend', 'Backend', 'Design']" 
      duration="1 semaine" 
      year="2025" 
      description="Sound3D est une expérience musicale immersive qui permet aux utilisateurs de rechercher et de découvrir des artistes, de la musique et des pochettes d'album en profondeur.<br/><br/>
                        Cette expérience m'a permis d'explorer les possibilités offertes par l'utilisation en temps réel de données audio, ainsi que la manipulation d'objets en 3D. <br/><br/>
                        Il ne s'agit que de la première version du projet, qui est toujours en cours. C'est la première fois que j'utilise Three.js pour créer un monde en 3D. 
                        Pour ce visualiseur audio, j'ai utilisé la technologie Vue.js et l'API Deezer pour récupérer les morceaux de musique."
    />

    <ProjectsImg 
      :imagesLink="[img1, img2, img3, img4]" 
      extraClass="container"
    />

    <NextsProjects 
      link1="sdtraining" 
      link2="quixotic"
      :image1="imgNext1"
      :image2="imgNext2"
      name1="SD Training"
      name2="Quixotic"
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

