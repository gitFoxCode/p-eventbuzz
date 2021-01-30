<template>
  <svg-sprite />
  <Nav />
  <Hero />
  <Programs />
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./sections/Hero.vue";
import Programs from "./sections/Programs.vue";

export default {
  name: "App",
  components: {
    Hero,
    Nav,
    Programs
  }
};
</script>

<style lang="scss">

  @import '~@/assets/scss/reset.scss';
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    background-color: #FAFAFA;
    font-family: "Poppins", sans-serif;
  }
  a.button{
    color: #fff;
    padding: 10px 25px;
    background-color: #EC398A;
    border-radius: 25px;
  }
  a.button:hover{
    letter-spacing: 0;
  }
</style>
