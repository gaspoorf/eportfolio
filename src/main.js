import './assets/css/main.css';
import './assets/js/lenis.js';
import { gsap } from 'gsap'

import { createApp } from 'vue';
import Transition from './assets/js/swup.js';


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function mountVueApp() {
  const pageName = document.querySelector('#app')?.dataset.page;

  if (pageName) {
    import(`./pages/${capitalize(pageName)}.vue`)
      .then((module) => {
        const app = createApp(module.default);
        app.mount('#app');
      })

  }
}


mountVueApp();

const transition = new Transition(() => {
  mountVueApp();
});



window.addEventListener("DOMContentLoaded", () => {
  const transitionDivs = document.querySelectorAll(".transition-content");
  const container = document.querySelector(".transition-container");

  if (!container || transitionDivs.length === 0) return; // évite l'erreur si absents

  if (!sessionStorage.getItem("hasVisited")) {
    container.style.display = "flex";

    gsap.set(transitionDivs, {
      x: "0%",
      display: "block",
    });

    setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          container.style.display = "none";
          transitionDivs.forEach(div => div.style.display = "none");
          sessionStorage.setItem("hasVisited", "true");
        }
      });

      transitionDivs.forEach((div, i) => {
        tl.to(div, {
          x: "100%",
          duration: 0.8,
          ease: "power2.inOut",
        }, i * 0.15);
      });
    }, 500);
  } else {
    container.style.display = "none";
    transitionDivs.forEach(div => {
      div.style.display = "none";
    });
  }
});

