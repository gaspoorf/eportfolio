<script setup>
    import { onMounted, onUnmounted, ref } from 'vue'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { gsap } from 'gsap'
    import BlockBaseline from '../assets/js/baseline.js'

    const baselineRef = ref(null)

    const firstLines = [
        ['HTML', 'SCSS', 'JS', 'PHP', 'SQL', 'VUE', 'GSAP', 'THREE.JS', 'WORDPRESS'],
        ['HTML', 'CSS', 'JS', 'PHP', 'SQL', 'VUE', 'GSAP', 'THREE.JS', 'WORDPRESS'],
        ['HTML', 'CSS', 'JS', 'PHP', 'SQL', 'REACT', 'WEBGL', 'THREE.JS', 'WORDPRESS'],
    ]

    const secondLines = [
        ['CREATIVITY', 'TEAM-WORKING', 'DETERMINATION', 'FLEXIBILITY'],
        ['CREATIVITY', 'TEAM-WORKING', 'DETERMINATION', 'FLEXIBILITY'],
        ['CREATIVITY', 'TEAM-WORKING', 'DETERMINATION', 'FLEXIBILITY'],
    ]


    onMounted(() => {
        if (baselineRef.value) {
            const blocks = baselineRef.value.querySelectorAll('[data-hwc-blockbaseline]')
            blocks.forEach(block => {
                new BlockBaseline(block).init()
            })

            const blocksSecond = baselineRef.value.querySelectorAll('[data-hwc-blockbaselineSecond]')
            blocksSecond.forEach(block => {
                new BlockBaseline(block, { reverse: true }).init()
            })
        }
    })

    onUnmounted(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

</script>

<template>
    <section ref="baselineRef">
        <div class="video-baseline-bg">
            <hr class="line2">

            <div class="hwc-BlockBaselineVideo hwc-Blocks-item" data-hwc-blockbaseline>
                <div class="hwc-BlockBaselineVideo-container hwc-fs-120" data-blockbaseline-title data-background-invert>
                <span
                    v-for="(line, i) in firstLines"
                    :key="i"
                    data-blockbaseline-line
                    class="words-baseline"
                >
                    <template v-for="(tech, j) in line" :key="j">
                    <span>{{ tech }}</span>
                    <span> / </span>
                    </template>
                </span>
                </div>
            </div>

            <hr class="line2">

            <div class="hwc-BlockBaselineVideo hwc-Blocks-item" data-hwc-blockbaselineSecond>
                <div class="hwc-BlockBaselineVideo-container hwc-fs-120" data-blockbaselineSecond-title data-background-invert>
                <span
                    v-for="(line, i) in secondLines"
                    :key="i"
                    data-blockbaseline-line
                    class="words-baseline"
                >
                    <template v-for="(tech, j) in line" :key="j">
                    <span>{{ tech }}</span>
                    <span> / </span>
                    </template>
                </span>
                </div>
            </div>

            <hr class="line2">
        </div>
    </section>
    
</template>


<style scoped>

.hwc-BlockBaselineVideo {
    white-space: pre;   
}

.hwc-BlockBaselineVideo-container {
    letter-spacing: 1px;
    color: transparent;
    display: flex;
    justify-content: center;
    align-items: start;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 80px;
    font-family: 'Archivo Black', sans-serif;
}

@media (max-width: 768px) {
    .hwc-BlockBaselineVideo-container {
        font-size: 30px;
    }
}

.words-baseline span{
    opacity: 0.3;
    color: white;
    transition: opacity 0.3s ease-in-out;
}

.words-baseline span:hover{
    opacity: 1;
}

.hwc-BlockBaselineVideo-container > * {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>