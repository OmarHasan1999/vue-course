<template lang="">
    <div>
        this is about page
    </div>
    <MyContent :st="names"/>

    <aboutSection>
        <template #slotHead>
            <h2>this is slot paragraph</h2>
        </template>
        <template #slotHeadTwo>
            <h2>this is slot paragraph two</h2>
        </template>
    </aboutSection>
</template>
<script>
import aboutSection from '../components/aboutSection.vue';
import MyContent from '../components/MyContent.vue';
export default {
    components:{
        MyContent,aboutSection
    },
    data() {
        return {
            names:["google", "facebook", "twitter"]
        }
    },
}
</script>
<style lang="css">
    div{
        text-align: center;
    }
</style>