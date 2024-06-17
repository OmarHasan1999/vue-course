<template lang="">
    <div class="main">
        <h3>the first Name is : {{ firstName}}</h3>
        <h3>the last Name is : {{ lastName }}</h3>
        <h3>the age is : {{ age }}</h3>
        <p>your skills : {{ myObj.skills }}</p>
        <ul>
            <li v-for="item in theArr" :key="item">{{ item }}</li>
        </ul>
        <ol>
            <li v-for="item in clubs" :key="item.id">{{ item.club }}</li>
        </ol>
        <h4>the status is : {{ status }}</h4>

        <hr>
        <h2 ref="refProp">the number is : {{ num }}</h2>
        <button @click="IncNum">Say Hello</button>
        <h3>{{ seninAd }}</h3>
        <h3>{{ theNum }}</h3>

        <hr>
        <h3>your country : {{ theProps.theCountry}}</h3>
        <h3>your work : {{ theProps.theWork}}</h3>
        <button @click="click('clickBut')">Click On</button>
        <hr>

        <h2>{{ count }}</h2>
        <button @click="count++">Change Count</button>
        <button @click="count--">Change Count</button>
        <hr>

        <h2>{{ theCount }}</h2>
        <button @click="theCount++">your Count</button>
        <button @click="newArr.push(theCount)">push Count</button>
        <hr>

        <h3>{{ yourLevel }}</h3>
        <h3>{{ yourClub }}</h3>
        <button @click="sayYourName">show name</button>
        <hr>

        <span>{{ phoneNum }}</span>
        <button @click="phoneNum+=5">phone Number</button>
        <hr><br>

    </div>
</template>



<script setup>
import { ref, computed, defineProps, defineEmits, watch, inject } from "vue"

// Data
const firstName = ref("Omar")
const lastName = ref("Hasan")
const age = ref(25)
const status = ref(true)
const myObj = ref({
    id : 1,
    skills : "HTML"
})
const theArr = ref(["HTML", "CSS", "PYTHON"])
const clubs = ref([
    {
        id: 1,
        club: "Barcelona"
    },
    {
        id: 2,
        club: "Madrid"
    },
    {
        id: 3,
        club: "United"
    }
])


// Function & Computed
const num = ref(10)
const IncNum = () => {
    num.value++;
}
const ad = ref("Mohammad") 
const ulke = ref("Syria") 
const seninAd = computed(() => {
    return `senin adin : ${ad.value}, senin ulke : ${ulke.value} `
})
const theNum = computed(() => {
    return `the number with 15 is : ${num.value + 15}`
})
const refProp = ref(null)
// setTimeout(() => {
//     console.log(refProp.value);
// },3000)


// Props & Emits
const theProps = defineProps({
    theCountry: {
        type:String,
        Default:true
    },
    theWork: {
        type:String,
        Default:true
    }
})

const click = defineEmits(["clickBut"])


// Router & Route
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()

console.log("Router in composition API : ",router);
console.log("Route in composition API : ", route);


// Mixins 
import mixins from "../js/index";
const { count } = mixins()


// Watch
const theCount = ref(5)
const newArr = ref([])

watch(() => theCount.value, 
    (newVal, oldVal) => {
        console.log(oldVal);
        console.log(newVal);
    }
)

watch(() => newArr.value,(newValue) => {
    console.log(newValue);
},
{ deep:true }
)


// Provide & Inject
const yourLevel = inject("theLevel")
const yourClub = inject("theClub")
const sayYourName = inject("yourName")


// Life Cycle Hooks
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
const phoneNum = ref(2020)
onBeforeMount(() => {
    console.log("on Before Mount");
})
onMounted(() => {
    console.log("on Mounted");
})
onBeforeUpdate(() => {
    console.log("on Before Updated");
})
onUpdated(() => {
    console.log("on Updated");
})


// Mitt
const emit = inject("emitter")
onMounted(() => {
    emit.on("globalEmit", () => {
        console.log("global emit is fired");
    })
})

</script>


<style>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: -10vh;
        margin-top: 3vh;
        color:rgba(0, 0, 0, 0.765);
    }
    .main hr{
        width:100%
    }
</style>