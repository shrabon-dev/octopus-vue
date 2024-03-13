<template>
  <section class="relative">
    <div class="container-fluid">
        <div class="title">
            <p class="leftToRight"> What We Can Do</p>
        </div>
        <div class="content">
            <div class="cursor"></div>
            <h6 ><span class="textAnimate">Branding</span> <span class="textAnimate">UI / UX</span> <span class="textAnimate">Lottie</span> <br> <span class="textAnimate">Wordpress</span>  <span class="textAnimate">Webflow</span> <br> <span class="textAnimate">Design</span> <span class="textAnimate">Spline</span> <span class="textAnimate">Laravel</span> </h6>
        </div>
    </div>
  </section>
</template>

<script>
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name:'WhatWeCan',
    mounted(){
      this.startAnimation()
      
    },
    methods:{
      startAnimation(){
         const texts = document.querySelectorAll('.textAnimate')
         texts.forEach((text)=>{
            gsap.fromTo(text,{translateY:200,opacity:0},{translateY:0,opacity:1,duration:10, scrollTrigger: {
              trigger: text,
              start: 'top 100%', // Adjust trigger start position as needed
              end: 'bottom 60%', // Adjust trigger end position as needed
              scrub: true // Smooth animation
            }})
         })
         gsap.fromTo('.leftToRight',{translateX:-200,},{translateX:0,opacity:1,duration:10, scrollTrigger: {
              trigger:'.leftToRight',
              start: 'top 80%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              scrub: true // Smooth animation
            }})
      }
    }
}
</script>

<style scoped>
 .title p {
    font-size: 20px;
 }
 .content h6 {
    font-size: 112px;
    font-family: "Saira", sans-serif;
    text-align: center;
    font-weight: 700;
 }
 .content h6 span {
    color: transparent; /* Set text color to black by default */
    -webkit-text-stroke: 1px #ffffff50; /* Add white stroke around text */
    transition: .4s all ease-in-out;
    mix-blend-mode: difference;
 }
 .content h6 span:hover {
    color: #ffffff; /* Change text color to white on hover */
 }
 .cursor {
    width: 80px;
    height: 80px;
    background: #FFCF4E;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
 }
 .textAnimate{
   display: inline-block;
 }
 @media (min-width:300px) and (max-width:575px) {
  .content h6 {
    font-size: 24px;
  }
  .cursor{
    width: 40px;
    height: 40px;

  }
 }
 @media (min-width:576px) and (max-width:999px) {
  .content h6 {
    font-size: 52px;
  }
  .cursor{
    width: 40px;
    height: 40px;

  }
 }
</style>
