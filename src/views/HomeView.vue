<template>
  <div class="d-flex justify-center align-center mt-5 flex-column">
    <h2 class="mb-3">Home Page</h2>
    <!-- <h3> the data is {{ this.count }}</h3> -->
    <!-- <h3 class="mt-3"> the data is {{ getter }}</h3> -->

    <h3> the data is {{ count }}</h3>
    <h3 class="mt-3"> the data is {{ plusOne }}</h3>
    <h3 class="mt-3">the name is : {{ name }}</h3>

    <button @click="inc" class="bg-blue mt-5 pa-3">Increase</button>
    <button @click="dec" class="bg-black mt-5 pa-2">Decrease</button>
    <button @click="change" class="bg-pink mt-5 pa-2">Change Name</button>
    <button @click="theStore.$reset" class="bg-orange mt-5 pa-2">Reset All</button>
  </div>
</template>


<script setup>


// Pinia With Option API
// import { counterStore } from "../store/countStore"
// import { mapState, mapActions } from "pinia";

// export default{
//   computed: {
//     ...mapState(counterStore, ["count"]),
//     getter(){
//       return counterStore().plusOne
//     }
//   },

//   methods: {
//     ...mapActions(counterStore, ["inc", "dec"])
//   },


// }

// Pinia With Composition API
import { counterStore } from '../store/countStore';
import { storeToRefs } from 'pinia';

const theStore = counterStore()

const { count, plusOne, name } = storeToRefs(theStore)

const inc = theStore.inc
const dec = theStore.dec

const change = theStore.changeName

</script>


<style lang="css">
  
</style>