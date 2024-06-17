<template lang="">
    <div class="about">
        <h3>this is about page</h3>
        <p>{{ this.firstProduct }}</p>
        <h3>your name {{ this.$store.state.name }}</h3>
        <h3>your age {{ this.$store.state.age }}</h3>
        <h2>your info is {{ this.$store.getters.nameAndage }}</h2>
        <button @click="this.$store.commit('changeName')">Fire Mutation</button>


        <!-- Helpers -->
        <button @click="getYouProducts">Map State Button</Button>
        <ul>
            <li v-for="item in myProduct.product" :key="item.id">
            {{ item.title }}</li>
        </ul>

        <button @click="productWithMapActions">Map Actions Button</button>

        <button @click="productWithMapMutations">Map Mutations Button</button>


    </div>
</template>


<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState(["myProduct"]),
        ...mapGetters(["firstProduct"]),
    },

    methods: {
        ...mapActions(["getProduct"]),
        ...mapMutations(["yourProducts"]),

       async getYouProducts(){
           await this.$store.dispatch('getProduct')
            console.log("the API data with Helpers : ", this.myProduct.product);
        },
        
        async productWithMapActions(){
            await this.getProduct()
        },
 
        // productWithMapMutations(){
        //     setTimeout(() => {
        //         this.yourProducts([1, 2, 3])
        //     }, 3000);
        // },

        

    },
}
</script>


<style lang="css">
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 15vh;
        line-height: 10px;
    }
</style>