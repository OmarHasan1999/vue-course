<template lang="">
    <div class="nav">
        <h3 @click="emitEvent">LOGO</h3>
        <div class="links">
            <ul>
                <!-- <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li> -->
                <li v-for="item in theLinks" :key="item.name">
                <router-link v-if="item.name == 'Projects' && item.name != 'pageNotFound' " 
                :to="{ name:item.name, 
                       params:{userId:12, userName:'omar'},
                       query:{userNum: 14, userClub: 'madrid'} }">
                       {{ item.meta.title }}</router-link>
    
                <router-link v-else-if="item.name != 'pageNotFound'"
                :to="{name:item.name}">{{ item.meta.title }}</router-link>
                </li>
            </ul>
        </div>
        <div class="button">
            <button>LOG IN</button>
            <button>SIGN UP</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'MyNav',
    data() {
        return {
            theLinks: [],
        }
    },
    inject:["emitter"],
    methods: {
        emitEvent(){
            this.emitter.emit("globalEvent")
        }
    },
    mounted() {
        this.theLinks = this.$router.options.routes
    },
}
</script>
<style lang="css">
    .nav{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 100%;
        height: 13vh;
    }
    *{
        padding: 0%;
        margin: 0;
    }
    .links ul li{
        list-style-type: none;
        padding: 0px 8vh;
        cursor: pointer;
        margin-left: 15vh;
    }
    .links ul{
        display: flex;
        flex-direction: row;
    }
    .nav h3{
        margin-right: 20vh;
        font-size: 27px;
        font-weight: 900;
    }
    .button{
        margin-left: 35vh;
    }
    .button button{
        padding: 10px;
        font-size: 15px;
        border-radius: 7px;
    }
</style>