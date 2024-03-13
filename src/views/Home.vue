<template>
<Menubar/>
<Hero/>
<ImageVue/>
<WhatWeCan/>
<Free/>
<Project/>
<WhoWeAre/>
<MoveText/>
<Contact/>
</template>

<script>
import Menubar from '../components/menubar/Menubar.vue';
import Hero from '../components/hero/Hero.vue';
import ImageVue from '../components/image/Image.vue';
import WhatWeCan from '../components/whatcan/WhatWeCan.vue';
import Free from '../components/free/Free.vue';
import Project from '../components/project/Project.vue';
import WhoWeAre from '../components/who/WhoWeAre.vue';
import MoveText from '../components/movetext/MoveText.vue';
import Contact from '../components/contact/Contact.vue';

export default {
    name: 'Home',
    components: { Menubar, Hero,ImageVue,WhatWeCan,Free,Project,WhoWeAre, MoveText, Contact}
}
</script>

<style scoped>

</style>
