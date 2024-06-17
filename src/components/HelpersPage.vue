<template lang="">
    <div class="helpers">
        <h2>{{ myProduct.club }}</h2>
        <h2>{{ myProduct.country }}</h2>
        <h3>{{ yourCountry }}</h3>
        <button @click="changeHome">Change Country</Button>
        <button @click="changeClub">Change Club</Button>

        <p>***************************************************</p>


    </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(["myProduct"]),
        ...mapGetters(["yourCountry"])
    },

    methods: {
        ...mapMutations(["changeHome"]),
        ...mapActions(["changeClub"])
    },
}
</script>



<style lang="css">
    .helpers{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 14vh;
        line-height: 20px;
        flex-direction: column;
    }
</style>