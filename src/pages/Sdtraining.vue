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

import sdtrainingVideo from '@/assets/videos/sdtraining.mp4'

import img1 from '@/assets/img/sdtraining/sdt4.png'
import img2 from '@/assets/img/sdtraining/sdt2.png'
import img3 from '@/assets/img/sdtraining/sdt3.png'
import img4 from '@/assets/img/sdtraining/sd5.png'

import imgNext1 from '@/assets/img/sound3d/sound3d.jpeg'
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
    <Header msg="SD TRAINING" extraClass="titleSecond" subtitle="Site web créatif pour un coach sportif"/>
    <BackLink />
  </header>

  <main>
    <Video :videoSrc="sdtrainingVideo" />

    <ProjectsInfos 
      link="https://www.sdtraining.fr/" 
      linkTitle="Visiter le site"

      Secondlink="https://github.com/gaspoorf/sd-training-theme"
      SecondlinkTitle="Voir le GitHub"  

      :tools="['GSAP', 'SWUP', 'Js', 'Php', 'SCSS', 'Tailwind', 'WordPress', 'Timber', 'Twig']" 

      :skills="[
        'C.E. 4.0.1 : Respect standards Web, accessibilité code clair.',
        'C.E. 4.0.3 : Code modulaire et réutilisable, logique et affichage séparé.',
        'C.E. 4.0.4 : Utilisation de Git.',
        'AC34.04 : Conception de blocs Gutenberg dynamiques.',
        'AC34.05 : Déploiement et mise en ligne.',
        'C.E. 5.0.2 : Communication fluide avec le chef de projet et le client.',
        'C.E. 5.0.3 : Respect RGPD, gestion des cookies...',
        'C.E. 5.0.4 : Optimisation des performances.',
        'AC35.02 : Tests qualité, responsive, UX...'
      ]" 

      context="Agence Here we com" 
      :roles="['Frontend', 'Backend']" 
      duration="3 semaines" 
      year="2025" 
      description="J'ai développé ce site pour Sébastien Durand, un préparateur physique de haut niveau qui travaille avec des athlètes tels que Grigor Dimitrov et Serena Williams.<br/><br/>
                    L'identité visuelle et le design coloré reflètent l'intensité et l'énergie de l'univers de Sébastien.  Mon rôle était de donner vie à cette vision à travers un développement fluide, dynamique et immersif. 
                    J'ai pris en charge tout le développement du site, en utilisant des animations GSAP et des transitions de pages fluides avec Swup.js, pour donner au site un réel sens du mouvement et de la fluidité<br/><br/>
                    Chaque bloc de contenu est flexible et gérable par le client. Cela lui donne un contrôle total, sans compromettre l'intégrité créative de la conception. 
                    C'est un projet techniquement riche qui m'a poussé à aller plus loin dans le développement créatif."
    />

    <ProjectsImg 
      :imagesLink="[img1, img2, img3, img4]" 
      extraClass="container"
    />

    <NextsProjects 
      link1="sound3d" 
      link2="quixotic"
      :image1="imgNext1"
      :image2="imgNext2"
      name1="Sound 3D"
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

