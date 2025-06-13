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

import drawhubVideo from '@/assets/videos/draw.mp4'

import img1 from '@/assets/img/drawhub/draw_menu.png'
import img2 from '@/assets/img/drawhub/draw_white.png'
import img3 from '@/assets/img/drawhub/draw_schema.png'
import img4 from '@/assets/img/drawhub/draw_sun.png'

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
    <Header msg="DRAW HUB" extraClass="titleSecond" subtitle="Dessins collaboratifs en ligne"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="drawhubVideo" />

    <ProjectsInfos 
      link="https://drawinghub.onrender.com/" 
      linkTitle="Voir le site"

      Secondlink="https://github.com/gaspoorf/DrawingHub" 
      SecondlinkTitle="Voir le GitHub"  

      :tools="['HTML', 'CSS', 'JS', 'Websockets', 'Express', 'Node.js', 'Render']" 

      :skills="[
        'AC34.02 : Développement côté serveur, Node.js et WebSockets.',
        'AC34.03 : Dispositif interactif complexe en temps réel.', 
        'AC34.05 : Hébergement de l’app dynamique avec Render.', 
        'C.E. 4.0.1 : Respect des standards Web, accessible et responsive.', 
        'C.E. 4.0.2 : Concepts d’architecture client-serveur.', 
        'C.E. 4.0.3 : Code sobre et réutilisable.',
        'AC35.02 : Qualité et à la fluidité de l’expérience utilisateur.'
      ]" 


      context="Projet universitaire" 
      :roles="['Developpement', 'Design']" 
      duration="1 semaine" 
      year="2024" 
      description="Draw Hub est une plateforme en ligne pour le dessin, l'écriture et la création de schéma en collaboration.
                        Grâce à la technologie Websosckets, l'expérience se fait en temps réel. Grâce à un système de création de jeux, vous pouvez collaborer avec qui vous voulez en partageant le code du jeu avec eux.<br/><br/>
                        Un tableau sonore ajoute du plaisir à l'expérience en jouant des sons pour tous les utilisateurs en temps réel.
                        J'héberge le système en ligne via Render.com, qui permet de déployer gratuitement des applications dynamiques. Lorsque l'application est lancée pour la première fois, il faut attendre 1 ou 2 minutes pour que le serveur démarre."
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

