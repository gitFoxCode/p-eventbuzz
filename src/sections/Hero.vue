<template>
  <section class="hero">
    <div class="hero__inner">
      <span class="description">
        Tuesday november 27.2025 | 9:00AM PT
      </span>
      <h1 class="title">Eventbuz Conference 2025</h1>
      <div class="timer">
        <div class="timer__card">
          <span class="timer__time">
            152
          </span>
          <span class="timer__title">Days</span>
        </div>
        <div class="timer__card">
          <span class="timer__time">
            05
          </span>
          <span class="timer__title">Hours</span>
        </div>
        <div class="timer__card">
          <span class="timer__time">
            45
          </span>
          <span class="timer__title">Minutes</span>
        </div>
        <div class="timer__card">
          <span class="timer__time">
            09
          </span>
          <span class="timer__title">Seconds</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    background-color: #2A166F;
    height: 100vh;
    width: 100%;
    padding: 0 15%;
    padding-top: 100px;
  }
  .hero__inner{
    padding-top: 50px;
  }
  .description{
    text-transform: uppercase;
    color: #D6D2EA;
    font-size: 0.8em;
  }
  .title{
    font-size: 4em;
    max-width: 10ch;
    font-weight: bold;
    color: #fff;
    margin-top: 15px;
  }
  .timer{
    display: flex;
    margin-top: 70px;
  }
  .timer__card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    border: 2px solid rgba(255,255,255,0.1);
    position: relative;
    margin: 0 10px;
  }
  .timer__card:first-of-type{
    margin-left: 0;
  }
  .timer__card::after{
    width: 103.5%;
    height: 4px;
  }
  .timer__card:nth-of-type(1)::after{
    content: "";
    position: absolute;
    background-color: #ED398B;
    bottom: -2px;
    left: -2px;
  }
  .timer__card:nth-of-type(2)::after{
    content: "";
    position: absolute;
    background-color: #EDA708;
    bottom: -2px;
    left: -2px;
  }
  .timer__card:nth-of-type(3)::after{
    content: "";
    position: absolute;
    background-color: #05ABED;
    bottom: -2px;
    left: -2px;
  }
  .timer__card:nth-of-type(4)::after{
    content: "";
    position: absolute;
    background-color: #FFFFFF;
    bottom: -2px;
    left: -2px;
  }
  .timer__card:nth-of-type(1) .timer__time{
    color: #ED398B;
  }
  .timer__card:nth-of-type(2) .timer__time{
    color: #EDA708;
  }
  .timer__card:nth-of-type(3) .timer__time{
    color: #05ABED;
  }
  .timer__time{
    font-size: 2.5em;
    font-weight: bold;
  }
  .timer__title{
    color: #E6DEFD;
    text-transform: uppercase;
    margin-top: 5px;
    font-size: 0.8em;
  }
</style>
