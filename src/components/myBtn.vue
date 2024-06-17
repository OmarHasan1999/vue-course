<template>
    <div class="btn">
        <button @click="fire">Button</button>
    </div>
</template>

<script setup>
import { inject } from "vue"

const emitter = inject("emitter")
const fire = () => {
    emitter.emit("globalEmit")
}

</script>

<style lang="css">
    .btn{
        display: flex;
        justify-content: center;
    }
</style>