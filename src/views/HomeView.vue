<template>
  <profile-page :theCountry="country" :theWork="work" @clickBut="writeName"/>
  <myBtn/>
</template>

<script setup>
import profilePage from "../components/profilePage.vue";  
import myBtn from "../components/myBtn.vue";  

const work = "Pilot"
const country = "Italia"
const writeName = () => {
  console.log("my name is ahmed");
}

import { ref, provide } from "vue"
const level = ref(11)
const club = ref("fc")
const sayName = () => {
  console.log("say your name");
}
provide("theLevel", level.value)
provide("theClub", club.value)
provide("yourName", sayName)

 
</script>
