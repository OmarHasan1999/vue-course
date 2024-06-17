<template lang="">
    <div class="projects">
        <h4>{{ $route.params.userId }}</h4>
        <h4>{{ $route.params.userName }}</h4>
        <h4>{{ $route.query.userNum }}</h4>
        <h4>{{ $route.query.userClub }}</h4>
        
        <br><br>

        <h3>this is Projects Page</h3>
        <button @click="aboutPage">About Page</button>
    </div>

    <div class="childLinks">
      <router-link :to="{name:'cssLessons'}">Course One</router-link>
      <router-link :to="{name:'pythonLessons'}">Course Two</router-link>
    </div>

    <router-view class="childLinks"/>
    <br><br>

    <hr><br><br><br>

    <div class="watchProperty">
    <input type="text" v-model="theUser"/>
    <button @click="active = !active">change status</button>
    <h2>user name is : {{ theUser }}</h2>
    <h2>the status is : {{ active }}</h2>
    <button @click="theArray.push('the data')">click on</button>
    </div>

</template>
<script>
export default {
    data() {
        return {
            theUser: "",
            active: true,
            theArray : [],
        }
    },
    methods: {
        aboutPage(){
            this.$router.push({
                name:"about"
            })
        }
    },
    watch: {  // syntax one for watch property
        theUser(newValue, oldValue){
            console.log("the new value : ", newValue);
            console.log("the old value : ", oldValue);
        },
        theArray:{
            handler(theValue){
                console.log("the value is : ", theValue);
            },
            deep: true
        }
    },
}
</script>
<style lang="css">
    .projects{
        display: flex; 
         justify-content: center;
         align-items: center;
         margin-top: 10vh;
         flex-direction: column;
    }
    .childLinks{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10vh;
        flex-direction: row;
        gap: 5vh;
    }
    .watchProperty{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3vh;
            }
</style>