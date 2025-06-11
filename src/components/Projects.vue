
<script setup>
import { reactive } from 'vue'

import sdtrainingImg from '@/assets/img/sdtraining/run.jpg'
import soundImg from '@/assets/img/sound3d/sound3d.jpeg'
import quixoticImg from '@/assets/img/quixotic/fire.jpg'
import zombieImg from '@/assets/img/zombie/ZI2.png'
import drawhubImg from '@/assets/img/drawhub/draw_menu.png'
import windjeeImg from '@/assets/img/windjee/windjee.webp'
import kingploufImg from '@/assets/img/kingplouf/kingplouf2.png'

const projects = reactive([
  { id: 'sdtraining', title: 'SD Training', image: sdtrainingImg },
  { id: 'sound3d', title: 'Sound 3D', image: soundImg },
  { id: 'quixotic', title: 'Quixotic', image: quixoticImg },
  { id: 'zombie-invasion', title: 'Zombie Invasion', image: zombieImg },
  { id: 'draw-hub', title: 'Draw Hub', image: drawhubImg },
  { id: 'windjee', title: 'Windjee', image: windjeeImg },
  { id: 'king-plouf', title: 'King Plouf', image: kingploufImg },
])
</script>

<template>
  <section id="works" class="flex-col">
    <div class="subtitle anim-title">
      <h2 class="animSubLetters">PROJECTS</h2>
    </div>  

    <div class="section-inner">
      <div class="anim-blockUP" v-for="(project, index) in projects" :key="index">
        <div class="project magic-hover">
          <a :href="`/${project.id}`" class="project-title">{{ project.title }}</a>
          <div class="image-container">
            <img :src="project.image" :alt="'Image ' + project.title">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

.section-inner{
    display: flex;
    flex-direction: column;
    gap: 6rem;
}

.project {
    width: 500px;
    height: 250px;
    font-size: 65px;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    font-family: 'Instrument Serif', serif;
}

.project p{
    padding-left: 20px;
    padding-right: 20px;
    margin: 0;
}


.project-marg{
    margin-right: 15vw;
}



.project a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Instrument Serif', serif;
    position: relative;
    z-index: 2; 
    opacity: 0.3; 
    mix-blend-mode: difference;
    /* transition: opacity 0.5s ease-in-out;  */
    cursor: none;
    text-align: center;
    width: 100%;
}



.see-more:hover {
    text-decoration: none;
}



.image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; 
    opacity: 1;
    display: flex;
}

.project img {
    width: 500px;
    aspect-ratio: 16/9;
    object-fit: cover;
    transform-origin: center;
}


.project:hover a{
    opacity: 1;
}

.project:hover .image-container img{
    opacity: 1;
    scale: 1;
}

.project-container{
    position: relative;
    display: flex;
}

.subtitle{
    text-align: left;
    font-family: 'Aesthetic';
}

</style>