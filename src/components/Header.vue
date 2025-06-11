<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,            
    required: false,
  },
  extraClass: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <div :class="['title', 'anim-title', extraClass]">
    <h1 class="name animLetters">{{ msg }}</h1>
    
    <div v-if="subtitle" class="text1">
      <h3>{{ subtitle }}</h3>
    </div>
  </div>
</template>

<style scoped>
  .name{
    font-size: 125px; 
    display: flex;
    flex-direction: column;
  }
  .title {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    position: absolute;
    top: 15%;
    left: 10%;
    font-family: 'Aesthetic';
  }

  .titleSecond {
    top: 45%;
  }

  .titleSecond .name {
    color: #ffffff;
    font-size: 90px; 
    font-weight: 100;
    display: block;
    margin: 0;
  }

  .animLetters{
    opacity: 0;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {

    .titleSecond{
      left: 5%;
      top: 45%;
    }

    .name{
      font-size: 60px;
    }

    .titleSecond .name {
      font-size: 60px;
      font-weight: 100;
      display: block;
      margin: 0;
    }
  }
</style>

