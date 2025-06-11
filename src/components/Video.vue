<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import gsap from 'gsap'

    const videoAnim = ref(null)

    defineProps({
        videoSrc: {
            type: String,
            required: false
        },
        imgSrc: {
            type: String,
            required: false
        }
    })



    onMounted(() => {
        const video = videoAnim.value
        if (!video) return

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX
            const mouseY = e.clientY

            const xPercent = (mouseX / window.innerWidth) * 2 - 1
            const yPercent = (mouseY / window.innerHeight) * 2 - 1

            gsap.to(video, {
            rotationY: xPercent * 5,
            rotationX: -yPercent * 5,
            transformPerspective: 1000,
            ease: 'power2.out',
            duration: 0.5,
            transformOrigin: 'center center',
            })
        })
    })

  
</script>

<template>
    
    <section>
        <div class="flex-col">
            <div class="flex-row">
                <div ref="videoAnim" class="img-container video-anim">
                    <video v-if="videoSrc" autoplay loop muted class="video">
                        <source :src="videoSrc" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img v-else :src="imgSrc" class="video" />
                </div>
            </div>
        </div>
    </section>

</template>


<style scoped>

.video-anim{
    aspect-ratio: 1000 / 515;
    overflow: hidden;
    width: 62rem;
}

.video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .video-anim{    
        max-width: 350px;
    }
}

</style>