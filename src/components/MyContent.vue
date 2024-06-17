<template lang="">
    <br><br><br>

    <h3 class="injectProperty">{{ myName }}</h3>
    <br><br><br>
    
    <div class="propsProperty">
        <ul>
            <li v-for="item in st" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["st"],
    methods: {
        
    },
    inject:["myName"]
}
</script>
<style scoped>
    ul li{
        list-style-type: none;
        padding: 14px;
        font-weight: 900;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .propsProperty{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .injectProperty{
        display: flex;
        justify-content: center;
        margin-top: 7vh;
        font-size: 30px;
    }
</style>