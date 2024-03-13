<template>
  <section>
    <div class="container-fluid py-100">
        <div  class="content relative">
          <div class="h-hidden">
            <p class="center sub-headding"> 👋 Hello, From Creative Agency inkyy.com</p>
          </div>
          <h2 style="max-height: 222px;overflow: hidden;" class="center"> <span style="display: block;" class="headding">Digital Agency with</span>  <span style="display: block;" class="headding"> Super Powers</span></h2>
          <div class="btn center">
              <a href="#">Say Hello !</a>
          </div>
          <div class="person ">
            <div class="img img-scale">
              <picture>
               <img :src="imgOne" alt="imgOne">
              </picture>
            </div>
            <div v-motion-pop-visible class="shape"><img :src="shape" alt="shape"></div>
            <div class="info">
              <p>Usman Ali</p>
              <h6>Brand Designer</h6>
            </div>
          </div>
          <div class="person p3">
            <div class="img img-scale">
              <picture>
               <img :src="imgTwo" :alt="imgTwo">
              </picture>
            </div>
            <div class="shape"><img :src="shape" alt="shape"></div>
            <div class="info">
              <p>Humairah</p>
              <h6>UX/UI</h6>
            </div>
          </div>
          <div class="person p2">
            <div class="img-scale img">
              <picture>
               <img   :src="imgThree" :alt="imgThree">
              </picture>
            </div>
            <div ref="imgAni" class="shape shape3"><img :src="shape" alt="shape"></div>
            <div class="info">
              <p>Sulaiman Rahman</p>
              <h6>Soft. Engineer</h6>
            </div>
          </div>
         
        </div>
    </div>
  </section>
</template>

<script>
import img1 from '../../assets/images/men.png'
import img2 from '../../assets/images/men2.png'
import img3 from '../../assets/images/men3.png'
import shape from '../../assets/images/shape.png'
import { gsap } from 'gsap';

let tl = gsap.timeline();

export default {
    name:'Hero',
    components: {  },
    data(){
      return{
        imgOne:img1,
        imgTwo:img2,
        imgThree:img3,
        shape:shape,
      }
    },
    mounted(){
      tl.fromTo('.sub-headding', { translateY: 150, opacity:0}, { translateY: 0, opacity: 1, duration: .5 });
      this.animateStart()
      tl.to('.btn', { scale: 0.5, opacity: 0, duration: 0.2 })
      // Second animation step: scale from 1.5 to 1
      .to('.btn', { scale: 1.2, opacity: 1, duration: 0.2 })
      // Third animation step: scale from 1.5 to 1
      .to('.btn', { scale: 1, opacity: 1, duration: 0.2 });
 
      tl.fromTo('.img-scale', {scale:.5,opacity:0},{scale:1.2,opacity:1,duration:.51})
      .fromTo('.img-scale', {scale:1.2},{scale:.8,opacity:1,duration:.21})
      .fromTo('.img-scale', {scale:.8},{scale:1,opacity:1,duration:.21});
      tl.fromTo('.info', { translateY: 50, opacity:0}, { translateY: 0, opacity: 1, duration: .5 });
      gsap.fromTo('.showImg',{height:50},{height:220,duration:.82})
      gsap.fromTo('.shape',{scale:0},{scale:1,duration:2})
    },
    methods:{
      animateStart(){
        const headdings = document.querySelectorAll('.headding')
        headdings.forEach((headding,index)=>{
          tl.fromTo(headding, { translateY: 150, opacity:0}, { translateY: 0, opacity: 1, duration: .3 },'+=.2');
        })
      }
    }
}
</script>

<style scoped>
    .h-hidden{
      overflow: hidden;
      height: 40px;
    }
   p{
    font-size: 20px;
    font-weight: 400;
   }
   h2{
    padding: 20px 0;
    font-size: 64px;
    font-weight: 900;
    max-width: 815px;
    margin: 0 auto;
    
   }
    
   .btn a{
    background: var(--bg-color);
    padding: 20px 52px;
    color: #000000;
    font-size: 18px;
    font-weight: 900;
    margin-top: 50px;
    display: inline-block;
   }
   .person{
    width: 300px;
    height: 175px;
    display: block;
    text-align: center;
    position: absolute;
   }
   .p3{
    right: 0;
    top: 0;
   }
   .p2{
    right: 15%;
    width: 400px;
   }
   .img,.showImg{
    width: 120px;
    height: 175px;
    display: block;
    border-radius: 95px;
    overflow: hidden;
    margin: 0 auto;
   }
   .p2 .showImg{
    width: 170px;
    height: 220px;
   }
   img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
   }
   .info p{
    font-size: 30px;
    font-family: "Indie Flower", cursive;
    color: #7C7C7C;
    text-align: center;
   }
   .info h6{
    font-size: 18px;
    color: #7C7C7C;
    text-align: center;
   }
   .shape{
    position: absolute;
    top: 0;
    left: 0;
   }
  @media (min-width: 300px) and (max-width: 340px){
    p{
      font-size: 12px !important; 
    }
    h2{
      font-size: 24px !important;
      padding: 0 0 !important;
    }
    .person{
    width: 100px !important;
    height: 105px !important;
   }
   .img{
    width: 76px;
    height: 120px;
   }
    .p2{
      right: 28% ;
      top: 100%;
    }
    .p3{
      right: -5% !important;
      top: 100%;
    }
    .info h6{
      font-size: 10px !important;
    }
    .btn a{
    font-size: 14px;
    padding: 16px 34px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  }
  @media (min-width:341px) and (max-width: 609px) {
    p{
      font-size: 12px !important; 
    }
    h2{
      font-size: 30px !important;
      padding: 0 0 !important;

    }
    .person{
    width: 100px !important;
    height: 105px !important;
   }
   .img{
    width: 76px;
    height: 120px;
   }
    .p2{
      right: 33% ;
      top: 100%;
    }
    .p3{
      right: -5% !important;
      top: 100%;
    }
    .info h6{
      font-size: 10px !important;
    }
    .btn a{
    font-size: 14px;
    padding: 16px 34px;
    margin-top: 20px;
    margin-bottom: 50px;
    }
  }
  @media (min-width:610px) and (max-width: 767px) {
    p{
      font-size: 12px !important; 
    }
    h2{
      font-size: 30px !important;
    }
    .btn a{
    font-size: 14px;
    padding: 16px 34px;
    margin-top: 20px;
    margin-bottom: 50px;
    }
    .person{
    width: 150px !important;
    height: 105px !important;
   }
    .p2{
      right: 33% ;
      top: 100%;
    }
    .p3{
      right: -5% !important;
      top: 100%;
    }
    .info h6{
      font-size: 14px !important;
    }
  }
  @media (min-width: 768px) and (max-width: 999px) {
  p{
    font-size: 16px;
  }
  .p3{
    right: 0;
    top: 100%;
  }
  .info p{
    font-size: 18px;
  }
  .info h6{
    font-size: 14px;
  }
  .btn a{
    font-size: 14px;
    padding: 16px 34px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  h2{
    font-size: 44px;
  }
  }

</style>