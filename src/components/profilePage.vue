<template>
    <div class="main">
        <h2>my name is {{ name }}</h2>
        <h2>my age is {{ age }}</h2>
        <p>{{ sayHi("Evening") }}</p>
        <a :href="theLink">Click</a>
        <img :src="theImg" alt="">
        <p>Number is {{ number }}</p>
        <button @click="yourCount">Button</button>
        <a href="https://google.com" @click.prevent>Click Me</a>
        <a href="#" @click.once="test">Click Me</a>
        <input type="text" @keyup.enter="yourName">


        <br><br>
        <label for="">{{ myName }}</label>
        <input type="text" v-model="myName">
        <button @click="myName = 'Welcome'">Click On</button>
        <br><br>


        <form action="" @submit.prevent="sendData">
        <label for="">Enter Your Name</label>
        <input type="text" v-model="myData.nameData"><br>
        <label for="">Enter Your email</label>
        <input type="email" v-model="myData.emailData"><br>
        <label for="">Enter Your password</label>
        <input type="password" v-model="myData.passwordData">
        <input type="submit">
        </form>
        <br><br>


        <h2>first number : {{ firstNum }}</h2>
        <p>first number multiple 2 :  {{ changeFirstNum }}</p>
        <button @click="firstNum++">click</button>
        <h2>second number : {{ secondNum }}</h2>
        <p>second number + 5 :  {{ changeSecondNum }}</p>
        <button @click="secondNum++">click</button>
        <br><br>


        <h3 :class="headingColor">Style Binding</h3>
        <input type="text" v-model="headingColor">
        <p :style="`font-size : ${fontSize}px`">change the font</p>
        <input type="number" v-model="fontSize">
        <br><br>


        <h2>My name is {{ myName }} and my age is {{ myAge }}</h2>
        <p v-if="myAge < 10">your age is smaller than 10</p>
        <p v-else-if="myAge == 10">your age is equal 10</p>
        <p v-else>your age is bigger than 10</p>
        <button @click="myAge++">change age</button>
        <br><hr><br>


        <input type="search" v-model="search" />
        <h4 v-for="item in searchFilter" :key="item.id">
             <i>{{ item.ad }}</i> <i>{{ item.soyad }}</i>
        </h4>


        <hr><br><br><br>
        <p v-for="items in names" :key="items">{{ items }}</p>
        <br><br>


        <div class="product" v-for="item in products" :key="item.id">
             <h4>{{ item.title }} {{ item.price }}</h4> 
             <div class="colors">
             <span :style="`background-color: ${color}`" v-for="color in item.colors" :key="color">{{ color }}</span>
             </div>
        </div>
        <br><br>


        <input type="text" ref="myInput">
        <h2 ref="refHeading">my age is {{ refAge }}</h2>
        <button @click="checkRefs">click It</button>
        <br><br>
        
        <div>
            <ul>
                <li v-for="item in newProducts" :key="item.id">
                    <p>{{ item.price }}</p>
                    <p>{{ item.category }}</p>
                    <p>{{ item.description }}</p>
                    <p>{{ item.title }}</p>
                    <img :src="item.thumbnail"><br><br>
                    <button @click="detailPage(item.title, item.price,item.thumbnail,item.description )">Detail Page</button>
                    <hr>
                </li>
            </ul>
        </div>

        

    </div>
</template>
<script>
import theMixin from "../js/index"
export default {
    mixins:[theMixin],
    data() {
        return {
            name : "omar",
            age : 25,
            search:"",
            theLink : "https://google.com",
            theImg : "../../src/assets/eD2VQkJj_400x400.jpg",
            number: 0,
            myName: "sara",
            myData: {
                nameData: "",
                emailData: "",
                passwordData: "",
            },
            firstNum : 0,
            secondNum : 0,
            headingColor: "",
            fontSize: "",
            myAge: 7,
            refAge: 15,
            myAlert: "new alert",

            students: [
                {
               id: 1,
               ad: "omar",
               soyad: "hasan",
               age: 15,
            },
            {
               id: 2,
               ad: "mark",
               soyad: "zagrop",
               age: 25,
            },
            {
               id: 3,
               ad: "jalal",
               soyad: "shammot",
               age: 30,
            },
        ],
        
        names: ["joe", "sama", "orfan"],
        products : [
            {
                id: 1,
                price: "12$",
                title: "samsung",
                colors: ["red", "green", "blue"]
            },
            {
                id: 2,
                price: "22$",
                title: "huawei",
                colors: ["blue", "green", "red"]
            },
            {
                id: 3,
                price: "32$",
                title: "Iphone",
                colors: ["green", "red", "blue"]
            },
            {
                id: 4,
                price: "9$",
                title: "nokia",
                colors: ["red", "green", "blue"]
            },
        ],
        }
    },
    methods: {
        sayHi(time) {
            return `Good ${time} ${this.name}`
        },
        yourCount(){
            this.number +=5
        },
        test(){
            console.log("object");
        },
        yourName(){
            console.log("your name is ..");
        },
        sendData(){
            console.log(this.myData)
        },
        checkRefs(){
            this.refAge = this.$refs.myInput.value
        },
        detailPage(title, price, img, disc){
            this.$router.push({
                name: "detail",
                params:{
                    theTitle:title,
                    thePrice:price,
                    theImg:img,
                },
                query:{
                    theDisc: disc
                }
            })
        }

    },
    computed:{
        changeFirstNum(){
            return this.firstNum * 2
        },
        changeSecondNum(){
            return this.secondNum + 5
        },
        getOld(){
            return this.students.filter(item => item.age >= 18)
        },
        searchFilter(){
            return this.students.filter((item) => item.ad.toLowerCase().match(this.search.toLowerCase()))
        }
    }
}
</script>
<style>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        flex-direction: column;
        font-size: 20px;
        margin: 30px;
    }
    h2{
        margin: 10px;
    }
    img{
        width: 12vh;
    }
    button{
        border : 1px solid white;
        background-color: black;
        color: white;
        padding: 16px;
        cursor: pointer;
    }
    input{
        border: 1px solid black;
    }
    .red{
    color: red;
}
    .blue{
    color: blue;
}
    .green{
    color: green;
}
    .yellow{
    color: yellow;
}
    .product{
    display: flex;
    justify-content: space-between;
}
   .colors{
   display: flex;
   justify-content: center;
   align-items: center;
}
.colors span{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ;
    margin: 10px;
}
</style>