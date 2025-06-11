<script setup>

const navLinks = [
  { target: 'about', label: 'ABOUT' },
  { target: 'works', label: 'WORKS' },
  { target: 'contact', label: 'CONTACT' }
]


function scrollToSection(id) {
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}


</script>

<template>
    <div id="nav1">
        <nav class="nav1">
            <ul>
                <li v-for="link in navLinks" :key="link.target">
                    <a class="magic-hover magic-hover__square" @click="scrollToSection(link.target)">
                        {{ link.label }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style scoped>
    
.nav1{
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: black; 
    padding: 20px;
    box-sizing: border-box;
    z-index: 5;
}
ul{
    list-style-type: none;
}
.nav1 ul {
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    width: 50px;
}

.nav1 li {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Archivo Black', sans-serif;
}


.nav1 a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
    writing-mode: vertical-rl;
}

@media (max-width: 768px) {

    #nav1{
        visibility: hidden;
        opacity: 0;
    }

    /* ----------NAV---------- */

    #nav1{
        visibility: hidden;
        opacity: 0;
    }

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
