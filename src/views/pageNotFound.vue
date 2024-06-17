<template lang="">
    <div class="notFound">
        <h1>404</h1>
        <h3>Not Found</h3>
        <router-link class="back" :to="{name:'Home'}">Back To Home Page</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .notFound{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 18vh;
        flex-direction: column;
        /* gap: 0.5vh; */
    }
    .notFound h1{
        font-size: 150px;
        color: rgba(0, 0, 0, 0.72);
        font-weight: 800;
    }
    .notFound h3{
        font-size: 28px;
        color: rgba(0, 0, 0, 0.72);
        font-weight: 700;
        font-family:Arial, Helvetica, sans-serif;
        margin-bottom: 3vh;
    }
    .back{
        background-color: rgba(0, 0, 0, 0.764);
        color: white;
        padding: 10px 12px;
        font-weight: 700;
        border-right: 7px;
        text-decoration: none;
        font-size: 13px;
    }
</style>