<template>
  <section class="py-100 sm-pb-50 md-pb-0">
    <div class="container-fluid py-100 sm-pb-50 md-pt-0">
        <div class="title center">
            <h3 class="contactTile">Have a Question?</h3>
            <p class="contactPerag">For More information's fell free to contact us on hello@inkyy.com or visit our website www.inkyy.com </p>
        </div>
        <form action="#">
          <div class="input">
            <input type="text" id="name" placeholder="">
            <label for="name">Full Name</label>
          </div>
          <div class="input">
            <input type="text" name="" id="email" placeholder="">
            <label for="email">Email</label>
          </div>
          <div class="input">
            <input type="text" name="" id="service" placeholder="">
            <label for="service">Service</label>
          </div>
          <div class="input">
            <textarea name="" id="message" placeholder=""></textarea>
            <label for="message">Message</label>
          </div>
          <div class="input center">
            <button>Say Hello!</button>
          </div>
        </form>
      </div>
      <div class="logo center">
        <picture>
          <img :src="flogo" :alt="flogo">
        </picture>
      </div>
  </section>
</template>

<script>
import flogo from '../../assets/images/flogo.png'
import {gsap} from 'gsap';
// gsap.registerPlugin(InViewport);
export default {
    name:'Contact',
    data(){
      return{
        flogo:flogo,
      }
    },
    mounted(){
      gsap.fromTo('.contactTile',{y:100,scale:.5,opacity:0},{y:0,scale:1,opacity:1,duration:.5,scrollTrigger:{
        trigger:'.contactTile',
        start:'top 80%',
        end:'bottom 30%',
        scrub:true,
        isInViewport:true,
        
      }});
      gsap.fromTo('.contactPerag',{y:100,scale:.5,opacity:0},{y:0,scale:1,opacity:1,duration:.5,scrollTrigger:{
        trigger:'.contactPerag',
        start:'top 80%',
        end:'bottom 30%',
        scrub:true,
        isInViewport:true,
      }});
      gsap.fromTo('.input',{y:100,scale:.5,opacity:0},{y:0,scale:1,opacity:1,stagger:.1,ease:'sine.inOut',duration:.5,scrollTrigger:{
        trigger:'.input',
        start:'top 105%',
        end:'bottom 50%',
        scrub:true,
        isInViewport:true,
      }});
    }
}
</script>

<style scoped>
h3{
  font-size: 64px;
}
p{
  font-size: 18px;
  font-weight: 100;
  font-family: "Saira", sans-serif;
  padding-top: 20px;
  max-width: 552px;
  margin: auto;
}
form{
  max-width: 556px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
}
input,textarea{
  background: transparent;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  margin-bottom: 20px;
  color: var(--bg-color);
  font-size: 20px;
  font-family: "Saira", sans-serif;
}
label{
  color: #f2f2f2;
  font-size: 20px;
  font-family: "Saira", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  transition: .42s all linear;

}
::selection{
  background: rgb(255, 255, 255);
  color: black;
}
.input{
  position: relative;
  overflow: hidden;
}
input{
  height: 40px;
}
textarea{
  height: 120px;
  resize: none;
}
input:focus,textarea:focus{
  outline: none;
  box-shadow: none;
}
input:focus + label,textarea:focus + label{
  left: -20%;
  color: var(--bg-color);
}
input:focus, textarea:focus{
  border-bottom-color:  var(--bg-color);
}
input:not(:placeholder-shown),textarea:not(:placeholder-shown){
  border-bottom-color:  var(--bg-color);
}
.input input:not(:placeholder-shown) + label,.input textarea:not(:placeholder-shown) + label {
  display: none;
}

button{
  background: var(--bg-color);
  padding: 14px 40px;
  font-size: 24px;
  font-weight: 700;
  border: none;
  color: #000000;
  margin-top: 50px;
}
@media (min-width:300px) and (max-width:575px) {
    h3{
      font-size: 32px;
    }
    .sm-pb-50{
      padding-bottom: 50px !important;
    }
 }
@media (min-width:576px) and (max-width:999px) {

    .md-pb-0{
      padding-bottom: 0px !important;
    }
    .md-pt-0{
      padding-top: 20px !important;
    }
 }
</style>