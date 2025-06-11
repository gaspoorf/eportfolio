import Swup from "swup";
import { gsap } from "gsap";
import Animation from '@/assets/js/animation.js';
import { initLenis } from '@/assets/js/lenis.js';

export default class Transition {
  constructor(onContentReplaced) {
    this.onContentReplaced = onContentReplaced;

    this.swup = new Swup();

    // Avant la transition (page sort)
    this.swup.hooks.on("visit:start", (event) => {
      return new Promise((resolve) => {
        this.playOutTransition(resolve);
      });
    });

    // Après chargement nouveau contenu (page in)
    this.swup.hooks.on("content:replace", async () => {
      // Réinitialise MagicMouse à chaque nouvelle page
      
      
      
      
      // await this.loadMagicMouse();



      // Réinitialise tes animations (SplitText, GSAP, etc)
      if (typeof this.onContentReplaced === "function") {
        this.onContentReplaced();
      }

      Animation.init();
      initLenis(); 
      Animation.refresh();

      // Lance la transition d'entrée
      this.playInTransition();
    });

    // Au premier chargement de la page, charger MagicMouse
    this.loadMagicMouse();
    initLenis();
  }

  async loadMagicMouse() {
    // if (typeof window.magicMouse === "undefined") {
    //   await new Promise((resolve, reject) => {
    //     const script = document.createElement("script");
    //     script.src = "https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js";
    //     script.onload = resolve;
    //     script.onerror = reject;
    //     document.head.appendChild(script);
    //   });
    // }

    // Si tu as plusieurs instances possibles, on peut tuer la précédente
    if (window.magicMouseInstance?.destroy) {
      window.magicMouseInstance.destroy();
    }

    const options = {
      hoverEffect: "circle-move",
      hoverItemMove: false,
      defaultCursor: false,
      outerWidth: 30,
      outerHeight: 30,
    };

    // Initialiser et stocker l'instance pour pouvoir la détruire si besoin
    window.magicMouseInstance = window.magicMouse(options);
  }

  playOutTransition(callback) {
  const transitionDivs = document.querySelectorAll(".transition-content");

  if (!transitionDivs.length) {
    callback();
    return;
  }

  // S'assurer que le conteneur est visible
  const container = document.querySelector(".transition-container");
  if (container) container.style.display = "flex";

  // Positionne les 3 divs et les anime avec un léger décalage
  gsap.set(transitionDivs, {
    x: "100%",
    display: "block",
  });

  const tl = gsap.timeline({
    onComplete: callback,
  });

  transitionDivs.forEach((div, i) => {
    tl.to(div, {
      x: "0%",
      duration: 0.8,
      ease: "power2.inOut",
    }, i * 0.15);
  });
}



 playInTransition() {
    const transitionDivs = document.querySelectorAll(".transition-content");

    if (!transitionDivs.length) return;

    const tl = gsap.timeline({
      onComplete: () => {
        const container = document.querySelector(".transition-container");
        if (container) container.style.display = "none";
        transitionDivs.forEach(div => div.style.display = "none");
      }
    });

    transitionDivs.forEach((div, i) => {
      tl.to(div, {
        x: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      }, i * 0.15);
    });
  }


}
