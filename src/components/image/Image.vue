<template>
  <section class="py-100" id="imgSec">
    <div class="rotate">
      <div  ref="leftMoved" class="flex-justify ">
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
    </div>
    </div>
    <div  class=" rotate -mt-37">
      <div ref="rightMoved" class="flex-justify">

      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgThree" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      <div class="img">
          <img :src="imgTwo" :alt="img">
      </div>
      <div class="img">
          <img :src="img" :alt="img">
      </div>
      
    </div>
    </div>
  </section>
</template>

<script>
import img from '../../assets/images/img/react-js-v2-2.jpg'
import imgTwo from '../../assets/images/img/react-js-v2.jpg'
import imgThree from '../../assets/images/img/responsive-website-design-react-js-v3.jpg'
import {gsap} from 'gsap';
export default {
    name:'Image',
    data(){
      return{
        img:img,
        imgTwo:imgTwo,
        imgThree:imgThree,
      }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },
    unmounted(){
      window.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
      handleScroll(){
        const scrollPos = window.scrollY
        const scrollAmount = scrollPos/2 + 500
        const scrollAmountRight = scrollPos/2 - 1000

        gsap.to(this.$refs.leftMoved, { x: -scrollAmount, duration: 0.5, ease: 'power2.out' });
        gsap.to(this.$refs.rightMoved, { x: scrollAmountRight, duration: 0.5, ease: 'power2.out' });
      }
    }
}
</script>

<style scoped>
#imgSec{
  padding-top: 400px;
  overflow-x: hidden;
}
.img{
  max-width: 300px;
  min-width: 300px;
  margin: 0 10px;
  transform: skewX(-32deg) rotateX(44deg);
}
img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.rotate{
  transform: rotate(10deg) translateX(-200px);
}
.-mt-37{
  margin-top:-37px;
}
@media (min-width:300px) and (max-width:575px) {
    #imgSec{
        padding-top: 150px !important;
    }

 }
</style>