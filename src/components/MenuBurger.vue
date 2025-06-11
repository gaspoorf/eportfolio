<script setup>
    
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

function toggleMenu() {
  isOpen.value = !isOpen.value
  document.documentElement.classList.toggle('scroll', isOpen.value)
}

function closeMenu() {
  isOpen.value = false
  document.documentElement.classList.remove('scroll')
}

function goTo(route) {
  closeMenu()
  router.push(route)
}
</script>


<template>
  <div
    id="burger-menu"
    :class="{ close: isOpen }"
    @click="toggleMenu"
  >
    <span></span>
  </div>
  <div
    id="menu"
    :class="{ overlay: isOpen }"
  >
    <ul>
      <li>
        <a id="MenuAbout" class="magic-hover" @click="goTo('/about')">ABOUT</a>
      </li>
      <li>
        <a id="MenuWorks" class="magic-hover" @click="goTo('/works')">WORKS</a>
      </li>
      <li>
        <a id="MenuContact" class="magic-hover" @click="goTo('/contact')">CONTACT</a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
    
#menu {
    visibility: hidden;
    opacity: 0;
}

@media (max-width: 768px) {

    #burger-menu {
        cursor: pointer;
        height: 27px;
        width: 27px;
        margin: 50px;
        overflow: visible;
        position: absolute;
        z-index: 12;
        top: 0;
        right: 0;
    }
      
    #burger-menu span,
    #burger-menu span:before,
    #burger-menu span:after {
        background: #fff;
        display: block;
        height: 2px;
        opacity: 1;
        position: absolute;
        transition: 0.3s ease-in-out;
    }
      
    #burger-menu span:before,
    #burger-menu span:after {
        content: '';
    }
      
    #burger-menu span:before {
        left: 0px;
        top: -10px;
        width: 27px;
    }
      
    #burger-menu span {
        right: 0px;
        top: 13px;
        width: 27px;
    }
      
    #burger-menu span:after {
        left: 0px;
        top: 10px;
        width: 27px;
    }
      
    #burger-menu.close span:before {
        top: 0px;
        transform: rotate(90deg);
        width: 27px;
    }
      
    #burger-menu.close span {
        transform: rotate(-45deg);
        top: 13px;
        width: 27px;
    }
      
    #burger-menu.close span:after {
        top: 0px;
        left: 0;
        transform: rotate(90deg);
        opacity: 0;
        width: 0;
    }


    .scroll{
        overflow: hidden;
    }


      
    #menu {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease-in-out;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11;
    }
      
    #menu.overlay {
        visibility: visible;
        opacity: 1;
    }
      
    #menu ul {
        list-style: none;
        padding: 0;
        text-align: center;
    }
      
    #menu li {
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: 'Archivo Black', sans-serif;
        font-size: 38px;
    }
}
</style>