<template>
  <nav class="nav">
    <div class="nav__logo">
      <img src="~@/assets/icons/eventbuz-logo.svg">
    </div>
    <ul class="nav__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Speaker</a></li>
      <li><a href="#">Schedule</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#" class="button">Buy ticket</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
    padding-top: 30px;
    align-items: center;
  }
  .nav__links{
    display: flex;
  }
  a{
    color: #8E84D1;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 10px;
    white-space: nowrap;
    transition: letter-spacing 0.4s;
  }
  a:hover{
    transition: letter-spacing 0.4s;
    letter-spacing: 1px;
  }
  a.active{
    color: #EC398A;
  }
  .button{
    margin-left: 30px;
  }
</style>
