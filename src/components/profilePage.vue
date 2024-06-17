<template lang="">
    <div class="home">
        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/about"><button>About</button></router-link>
        <router-link to="/helpers"><button>Helpers</button></router-link>
        <router-link to="/composition"><button>Composition</button></router-link>

        <h3>this is home page</h3>
        <h3>your name {{ this.$store.state.name }}</h3>
        <h3>your age {{ this.$store.state.age  }}</h3>
        <h2>your data is {{ this.$store.getters.nameAndage }}</h2>
        <button @click="this.$store.commit('changeName')">fire mutation</button>


        <!-- /******************************************* */ -->

        
        <button @click="this.$store.dispatch('getProduct')">Get Data</button>

        <ul>
            <li v-for="item in this.$store.state.myProduct.product" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="css">
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 15vh;
        line-height: 10px;
    }
    button{
        color: aliceblue;
        background-color: black;
        cursor: pointer;
        margin-bottom: 2px;
        padding: 10px;
        border-radius: 4px;

    }
</style>