<template>
  <section class="py-100 overflow-x-hidden overflow-y-hidden">
    <div class="container-fluid">
        <div class="flex-justify-stretch py-100">
            <div class="col-4 col-full">
               <div class="left relative">
                <h6 class="free">Free Figma SaaS</h6>
                <span class="like">145 Likes</span>
                <div class="arrow">
                    <img :src="arrow" :alt="arrow">
                </div>
               </div>
            </div>
            <div class="col-4 col-full">
               <div class="img freeImgAnime">
                <img :src="temp" :alt="temp">
               </div>
            </div>
            <div class="col-4 col-full">
                <p class="freeText">There’s a new way to design for saas, and it’s called squid kit. Figma is a free online design tool that allows you to create and share your designs with others. With figma template, you can easily create a beautiful, responsive design for your saas product.</p>
                <a class="downloadBtn" href="#">Download</a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import arrow from '../../assets/images/arrow.png';
import temp from '../../assets/images/temp.png';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
    name:'Free',
    data(){
        return{
            arrow:arrow,
            temp:temp,
        }
    },
    mounted(){
        gsap.fromTo('.free',{translateX:300,},{translateX:0,opacity:1,duration:10, scrollTrigger: {
              trigger:'.free',
              start: 'top 80%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              invalidateOnRefresh: true,
              scrub: 1, // Smooth animation
            }})
        gsap.fromTo('.like',{translateY:-200,},{translateY:0,opacity:1,duration:10, scrollTrigger: {
              trigger:'.like',
              start: 'top 80%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              invalidateOnRefresh: true,
              scrub: 1,
            }})
        gsap.fromTo('.downloadBtn',{translateX: 100,},{translateX:0,opacity:1,duration:10, scrollTrigger: {
              trigger:'.downloadBtn',
              start: 'top 280%', // Adjust trigger start position as needed
              end: 'bottom 20%',
              invalidateOnRefresh: true,
              scrub: 1,
            }})
        gsap.fromTo('.freeImgAnime',{scale:3,},{scale:1,opacity:1,duration:10, scrollTrigger: {
              trigger:'.freeImgAnime',
              start: 'top 250%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              invalidateOnRefresh: true,
              scrub: 1, // Smooth animation
            }})
        gsap.fromTo('.freeText',{scale:3,},{scale:1,opacity:1,duration:10, scrollTrigger: {
              trigger:'.freeText',
              start: 'top 250%', // Adjust trigger start position as needed
              end: 'bottom 20%', // Adjust trigger end position as needed
              invalidateOnRefresh: true,
              scrub: 1,
            }})
    },

}
</script>

<style scoped>
h6{
    font-size: 44px;
}
span{
    padding: 10px 20px;
    background: #41FF8D;
    color: black;
    border-radius: 25px;
    font-weight: 900;
    margin-top: 18px;
    display: inline-block;
}
.downloadBtn{
    padding: 10px 20px;
    background: #FFCF4E;
    color: black;
    font-weight: 900;
    margin-top: 24px;
    display: inline-block;
}
p{
    line-height: 1.7;
    font-size: 20px;
    font-weight: 100;
    margin-top: 400px;
}
.arrow{
    position: absolute;
    right: 0;
    bottom: -100px;
}
.img{
    width: 100%;
    transform: skewX(20deg);
    padding-top: 250px;
    position: relative;
    left: -150px;

}
.img img{
    width: 100%;
    display: block;
    object-fit: cover;
}
@media (min-width:300px) and (max-width:575px) {
    h6 {
        font-size: 24px;
    }
    p{
        font-size: 14px;
        margin-top: 100px;
        text-align: justify;
    }
    .img{
        padding-top: 105px;
        position: relative;
        left: 0;
    }
 }
@media (min-width:576px) and (max-width:999px) {
    h6 {
        font-size: 15px;
    }
    p{
        font-size: 14px;
        margin-top: 100px;
        text-align: justify;
    }
    .img{
        padding-top: 205px;
        position: relative;
        left: -100px;
    }
 }
</style>