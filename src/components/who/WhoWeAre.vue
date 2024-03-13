<template>
  <section class="py-100 sm-pb-0 sm-pt-20">
    <div class="container-fluid py-100 sm-pb-0 sm-pt-20">
       <div class="flex-justify d-block">
        <div class="col-2 col-full">
            <h3 class="leftToRightT">
                Who <span>We <img :src="small" :alt="small"></span> are
            </h3>
        </div>
        <div class="col-2 col-full">
            <p class="flipText">We believe that with the right tools, everyone can achieve their dreams, no matter their background or situation. We strive to make sure everyone has access to the resources they need to make a difference in their communities and the world.</p>
        </div>
       </div>
    </div>
  </section>
</template>

<script>
import small from '../../assets/images/small.png'
import { gsap } from 'gsap/gsap-core';
export default {
    name:'WhoWeAre',
    data(){
        return{
            small:small,
        }
    },
    mounted(){
        this.flipText();
        gsap.fromTo('.leftToRightT',{y: 100,opacity:0},{y:0,opacity:1,duration:.5,scrollTrigger: {
              trigger:'.leftToRightT',
              start: 'top 120%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              scrub: true // Smooth animation
            } });
    },
    methods:{
        flipText() {
        const text = document.querySelector('.flipText');
        const storeText = text.innerText;
        text.textContent = '';
        const textArray = storeText.split(' ');
        
        // Initialize the animation timeline
        const tl = gsap.timeline();
        
        textArray.forEach((element, index) => {
            const span = document.createElement('span');
            if (element == ' ') {
                span.textContent = '\u00A0'; // Non-breaking space
            } else {
                span.textContent = element + '\u00A0';
            }
            span.classList.add('childText');
            span.style.display = 'inline-block';
            text.appendChild(span);
            
            // Add animation to the timeline
            tl.fromTo(span, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'sine.inOut', scrollTrigger: {
              trigger:span,
              start: 'top 120%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              scrub: true // Smooth animation
            } }, index * 0.1); 
        });
    }
    }

}
</script>

<style scoped>
h3{
    font-size:102px;
    font-weight: 900;
}
p{
    font-size:36px;
    font-weight: 100;
    line-height: 57px;
    color: #ffffff;
}
h3 span{
    background: var(--bg-color);
    padding: 5px 10px;
    display: block;
    width: max-content;
    color: #000000;
}

 @media (min-width:300px) and (max-width:575px) {
    .d-block{
      display: block !important;
    }
    .item{
      margin-bottom: 50px;
      justify-content: space-between;
      background: #1313138c;
      padding: 10px;
    }
    h3{
      font-size: 28px;
    }
    p{
      font-size:14px;
      padding-top:50px;
      line-height: 1.7;
    }
    h3 span{
        display: inline-block;
    }
    h3 span img{
        width: 40px;
    }
    .sm-pb-0{
      padding-bottom: 0px !important;
    }
    .sm-pt-20{
      padding-top: 20px !important;
    }
  }
 @media (min-width:576px) and (max-width:999px) {

    .item{
      margin-bottom: 50px;
      justify-content: space-between;
      background: #1313138c;
      padding: 10px;
    }
    h3{
      font-size: 28px;
    }
    p{
      font-size:14px;
      padding-top:50px;
      line-height: 1.7;
    }

    h3 span img{
        width: 40px;
    }
    .sm-pb-0{
      padding-bottom: 0px !important;
    }
    .sm-pt-20{
      padding-top: 20px !important;
    }
  }
  @media (min-width:1000px) and (max-width:1280px){
    h3{
      font-size: 78px;
    }
    p{
      font-size:24px
    }
  }
</style>