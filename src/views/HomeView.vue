<template>
  <MyContent :st="names" />
  <profilePage/>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import profilePage from "@/components/profilePage.vue"; 

export default{
  components:{
    profilePage,MyContent
  },
  data() {
        return {
            names: ["omar", "mark", "sara"]
        }
    },
    provide:{
      myName: "Omar"
    },
    inject:["emitter"],
    mounted() {
      this.emitter.on("globalEvent",() => {
        console.log("global event works");
      })
    },
 }
</script>
