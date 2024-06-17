<template lang="">
    <div class="detail">
        <h3>{{ $route.params.theTitle }}</h3><br>
        <h5>{{ $route.params.thePrice }}</h5><br>
        <h5>{{ $route.query.theDisc }}</h5><br>
        <img :src="$route.params.theImg">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .detail{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20vh;
        flex-direction: column;
    }
    .detail h3{
        font-size: 20px;
    }
    .detail h5{
        font-size: 20px;
    }
    .detail img{
        width: 100px;
    }
</style>