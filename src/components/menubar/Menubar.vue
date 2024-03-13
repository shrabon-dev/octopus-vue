<script >
import { ByMenu } from "@kalimahapps/vue-icons";
import logo from '../../assets/images/logo.png'
import { CoBrandFacebookF  } from "@kalimahapps/vue-icons";
import { AkLinkedInFill  } from "@kalimahapps/vue-icons";
import { AkTwitterFill  } from "@kalimahapps/vue-icons";
import { BsWhatsapp  } from "@kalimahapps/vue-icons";
import { CdChromeClose   } from "@kalimahapps/vue-icons";
import {gsap} from 'gsap';
export default {
    name:'Menubar',
    components:{ByMenu,CoBrandFacebookF ,AkLinkedInFill ,AkTwitterFill ,BsWhatsapp,CdChromeClose},
    data(){
        return{
            brand:logo,
        }
    },
    methods: {
    startAnimation() {
      gsap.to('.menus', { scale: 1, duration: 0.4, opacity: 1 });
      gsap.fromTo('.showMenu', {x: 200, opacity: 0, skewX: 20},{x: 0, duration: 1, opacity: 1, skewX: 0,stagger:.1,}); 
      gsap.fromTo('.showIcon', {y: 100, opacity: 0, scale: .5},{y: 0, duration: 1, opacity: 1, scale: 1,stagger:.1,}); 
    },
    resetAnimation() {
      gsap.to('.menus', { scale: 0.2, duration: 0.4, opacity: 0 });
      gsap.to('.showMenu', {x: 200, opacity: 0, skewX: 20,stagger:.1,duration:1});
      gsap.to('.showIcon', {y: 100, opacity: 0, scale: .5,stagger:.1,duration:1});


    }
  }


}
</script>
<template>
  <nav class="py-5">
    <div class="container-fluid">
        <div class="flex-justify">
            <div class="logo">
                <img :src="brand" :alt="brand"> 
            </div>
            <div class="menu relative" @mouseenter="startAnimation" @mouseleave="resetAnimation">
                <div class="icon">
                    <div class="m-icon" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="menus">
                    <!-- <div class="m-icon">
                       <CdChromeClose />
                    </div> -->
                    <ul>
                        <li class="showMenu"> <a href=""><span></span> Home</a> </li>
                        <li class="showMenu"> <a href=""><span></span> About us</a> </li>
                        <li class="showMenu"> <a href=""><span></span> Our Services</a> </li>
                        <li class="showMenu"> <a href=""><span></span> Portfolios</a> </li>
                        <li class="showMenu"> <a href=""><span></span> Faq's</a> </li>
                        <li class="showMenu"> <a href=""><span></span> Contact us</a> </li>
                        <li class="showMenu"> <a href=""><span></span> Hire us</a> </li>
                    </ul>

                    <div class="social">
                        <span class="showIcon" ><a href="#"><CoBrandFacebookF /></a></span>
                        <span class="showIcon" ><a href="#"><AkLinkedInFill /></a></span>
                        <span class="showIcon" ><a href="#"><AkTwitterFill  /></a></span>
                        <span class="showIcon" ><a href="#"><BsWhatsapp   /></a></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </nav>
</template>



<style>

.m-icon {
    width: 50px;
    cursor: pointer;
    background: #FFCF4E;
    padding: 10px;
}
.showIcon{
    display: inline-block;
}

.m-icon span {
    width: 30px;
    height: 2px;
    background: #000000;
    display: block;
    margin-bottom: 10px;
    transition: .4s all;
    transform-origin: right;
    margin-left: auto; /* Changed from 'left' to 'right' */
}

.m-icon span:last-child {
    margin-bottom: 0px;
}

.m-icon:hover span:nth-child(1) {
    width: 18px;
}

.m-icon:hover span:nth-child(2) {
    width: 24px;
}
.menus{
    position: fixed;
    top:  0px;
    right: -105%;
    width: 35%;
    height: 100dvh;
    background: #FFCF4E;
    z-index: 999999;
    padding: 50px;
    transition: .4s all linear;
}
.menu:hover .menus{
    right: 0 !important;
}
.menus ul li a{
    font-size: 24px;
    color: #000000;
    font-weight: 900;
    padding: 16px 0;
    display: inline-flex;
    position: relative;
    transition: .4s all cubic-bezier(0.75, 0.82, 0.165, 1);
    align-items: center;
    gap: 10px;
}
.menus ul li a span{
    background: #000000;
    width: 0px;
    height: 2px;
    display: inline-block;
    text-align: center;
    line-height: 2px;
    left: -100px;
    transform: translate(0,0);
    transition: .4s all cubic-bezier(0.75, 0.82, 0.165, 1);
    z-index: 1;
}

.menus ul li a:hover{
    padding-left: 20px;
}
.menus ul li a:hover span{
    width: 40px;
    animation: slideRight .4s linear forwards;
}

@keyframes slideRight {
    from{
        transform: translateX(30px);
        opacity: 0;
    }
}
.social{
    margin-top: 60px;
}
.social span a{
    color: #000000;
    width:60px;
    height: 60px;
    display: inline-flex;
    background: #FFCF4E;
    box-shadow: 0 10px 10px -6px #0000004d;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    transition: .4s all ease-in-out;
}
.social span a:hover{
    background: #000000;
    color: #FFCF4E;
}
.menus .m-icon{
    width: 46px;
    height: 46px;
    position: absolute;
    left: -100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
}
@media (min-width:300px) and (max-width:510px) {
    .menus{
        width: 300px !important;
    }
    .menus ul li a{
        font-size: 14px;
    }
    .social span a{
        width: 32px;
        height: 32px;
        font-size: 14px;
    }
}
 
@media (min-width:511px) and (max-width:900px) {
    .menus{
        width: 500px;
    }
}
@media (min-width:900px) and (max-width:2000px) {
    .menus{
        width: 25% !important;
    }
}
 
</style>