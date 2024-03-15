<template>
  <section class="moveText relative overflow-x-hidden overflow-y-hidden">
    <div class="line rot-1">
    <img :src="line" alt="line" >
    <h4 class="text">
        <span ref="leftMovedText"  style="display: inline-block;">
        One and OnlyAgency with Supero Powers One and OnlyAgency with Supero PowersOne and OnlyAgency with Supero PowersOne and OnlyAgency with Supero PowersOne and OnlyAgency with Supero Powers
        </span>
    </h4>
  </div>
  <span class="shadow"></span>
  <div class="line rot-2">
    <img :src="line" alt="line">
    <h4 class="text">
        <span  ref="rightMovedText" style="display: inline-block;">
        One and OnlyAgency with Supero Powers One and OnlyAgency with Supero PowersOne and OnlyAgency with Supero PowersOne and OnlyAgency with Supero PowersOne and OnlyAgency with Supero Powers
        </span>
    </h4>
  </div>
  </section>
</template>

<script>
import line from'../../assets/images/line.png';
import {gsap} from 'gsap';
export default {
    name:'MoveText',
    data(){
        return{
            line:line,
        }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScrollForText)
    },
    unmounted(){
      window.removeEventListener('scroll',this.handleScrollForText)
    },
    methods:{
      handleScrollForText(){
        const scrollPos = window.scrollY
        const scrollAmount = scrollPos/2 + 500
        const scrollAmountRight = scrollPos/2 - 2500

        gsap.to(this.$refs.leftMovedText, { x: -scrollAmount, duration: 0.5, ease: 'power2.out' });
        gsap.to(this.$refs.rightMovedText, { x: scrollAmountRight, duration: 0.5, ease: 'power2.out' });
      }
    }
}
</script>

<style scoped>
.moveText{
    padding: 200px 0;
}
.line{
    width: 110%;
    position: relative;
    left: -5%;
    z-index: 1;
}
.line img{
    width: 100%;
    height: 136px;
    display: block;
    position: absolute;
    z-index: -1;

}
 h4{
    font-size: 64px;
    font-weight: 900;
    color: #000000;
    padding-top: 10px;
    white-space: nowrap;
 }
 .rot-1{
    transform: rotate(10deg);
    bottom: -150px;
 }
 .rot-2{
    transform: rotate(-10deg);
    z-index: 3;
 }
 .shadow{
    width: 400px;
    height: 300px;
    background: #000000;
    filter: blur(60px);
    display: inline-block;
    position: absolute;
    top: 35%;
    left: 40%;
    transform: translateX(-50%);
    z-index: 2;
 }
 @media (min-width:300px) and (max-width:575px) {
  .moveText{
    padding: 50px 0;
  }
  h4{
    font-size: 40px;
  }
  .line img{
    height: 90px;
  }

 }
</style>