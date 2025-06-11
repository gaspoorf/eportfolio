<script setup>
import mailIcon from '@/assets/img/svg/mail.svg'
import linkedinIcon from '@/assets/img/svg/linkedin.svg'
import githubIcon from '@/assets/img/svg/github.svg'
</script>

<template>
       
    <section id="contact" data-scroll-section>
        <div class="subtitle anim-title">
            <h2 class="animSubLetters center-title">CONTACT</h2>
        </div>  
        <div class="flex-col">
            <div class="flex-row">
                <div class="text contact">
                    <ul>
                        <li><a href="mailto:gaspard_hedde@yahoo.com"><div class="magic-hover magic-hover__square contact-link"><img :src="mailIcon" alt="mail" width="20px" height="auto"> gaspard_hedde@yahoo.com</div></a></li>
                        <li><a href="https://www.linkedin.com/in/gaspardhedde/" target="_blank"><div class="magic-hover magic-hover__square contact-link"><img :src="linkedinIcon" alt="LinkedIn" width="20px" height="auto"> gaspardhedde</div></a></li>
                        <li><a href="https://github.com/gaspoorf/" target="_blank"><div class="magic-hover magic-hover__square contact-link"><img :src="githubIcon" alt="Github" width="20px" height="auto"> Gaspoorf</div></a></li>
                    </ul>
                </div>
            </div>
        </div>            
    </section>   

</template>


<style scoped>

    .text{
        width: 500px;
        word-wrap: break-word;
        overflow-x: hidden;
        line-height: 25px;
        overflow: wrap;    
    }


    .contact{
        width:400px;
        font-size: 20px;
        overflow: hidden;
    }
    .contact li{
        width: auto;
    }

    .contact li a{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
    }

    .contact-link{
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 768px) {

        .contact{
            width:350px;
            font-size: 16px;
        }
    }
</style>