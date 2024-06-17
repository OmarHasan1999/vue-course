<template lang="">
    <div class="com">
        <h2>{{ products.counter }}</h2>
        <h2>{{ getters.multiple }}</h2>

        <button @click="store.commit('inc')">Inc</button>
        <button @click="store.commit('dec')">Dec</button>
        <button @click="store.dispatch('increase')">Inc</button>
        <button @click="store.dispatch('decrease')">Dec</button>
    </div>
</template>


<script setup>
import { useStore } from "vuex"

const store = useStore()

const products = store.state.myProduct

const getters = store.getters

console.log(products);

</script>



<style lang="css">
    .com{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16vh;
        flex-direction: column;
        padding: 3vh;
    }
</style>