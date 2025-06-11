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

import zombieVideo from '@/assets/videos/zombie.mp4'

import img1 from '@/assets/img/zombie/ZI1.png'
import img2 from '@/assets/img/zombie/ZI2.png'
import img3 from '@/assets/img/zombie/ZI3.png'
import img4 from '@/assets/img/zombie/ZI4.png'

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
    <Header msg="ZOMBIE INVASION" extraClass="titleSecond" subtitle="Jeu vidéo zombie"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="zombieVideo" />

    <ProjectsInfos 
      link="https://gaspardhedde.fr/Zombie-Invasion.zip" 
      linkTitle="Télécharger le jeu"  

      Secondlink="https://github.com/gaspoorf/" 
      SecondlinkTitle="Voir le github"  

      :tools="['UNITY', 'C#', '3D']" 

      :skills="[
        'AC34.03 : Jeux interactif, gestion d’IA et des interactions joueurs/zombies.',
        'AC34.04 : Système d’IA et de gestion des vagues.',
        'AC34.05 : Déploiement sur PC.',
        'C.E. 4.0.2 : Concepts informatiques comme le Raycasting, gestion des collisions...',
        'AC35.02 : Testant et corrigeant les bugs liés aux collisions et à l’IA.',
        'C.E. 4.0.3 : Code fonctionnel et réutilisable, avec une architecture claire.',
        'C.E. 5.0.1 : Veille technologique, notamment avec des tutoriels et outils.'
      ]"

      context="Projet universitaire" 
      :roles="['Developpement', 'Design']" 
      duration="2 semaines" 
      year="2024" 
      description="Zombie Invasion est un jeu vidéo créé sur Unity dans le cadre d'un projet scolaire. 
                    Le joueur se retrouve seul dans une ville abandonnée et doit survivre le plus longtemps possible face à des vagues d'attaques de zombies.<br/><br/>
                    Il s'agit de mon premier jeu vidéo, et je l'ai développé avec Unity, en utilisant le moteur 3D et le langage C#.
                    Pour le tester, téléchargez le fichier zip, décompressez-le et exécutez le fichier 'Zombie_Invasion'."
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

