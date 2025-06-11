// lenisScroll.js
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export function initLenis() {
  if (lenis) {
    lenis.destroy();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  lenis = new Lenis({
    smooth: true,
    direction: 'vertical',
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Bridge Lenis <=> ScrollTrigger
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return arguments.length ? lenis.scrollTo(value, 0) : lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.body.style.transform ? 'transform' : 'fixed'
  });

  lenis.on('scroll', ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: document.body });
  ScrollTrigger.refresh();
}
