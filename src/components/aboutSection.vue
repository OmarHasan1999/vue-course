<template lang="">
    <div v-if=toggle>
        <h3>First</h3>
        <slot name="slotHead"></slot>
        this is about section
        <slot name="slotHeadTwo"></slot>
    </div>

    <hr><br><br>
    <div v-if="!toggle">
        <h3>Second</h3>
        <slot name="slotHead"></slot>
        this is about section
        <slot name="slotHeadTwo"></slot>
    </div>
    <button @click="toggle = !toggle">Click To Toggle</button>
    <hr><br><br>

    <h3> My name is {{ fullName }}</h3>
    <h3>the Result : {{ sumOfNumbers }}</h3>

    <hr>
    <br><br><br>

    <div>
        <form @submit.prevent="sendData">
            <div>
                <label>enter your first name</label>
                <input type="text" v-model.lazy="yourData.firstName"/>
                <h4>yor first name is : {{ yourData.firstName }}</h4>
            </div>
            <div>
                <label>enter your last name</label>
                <input type="text" v-model.lazy="yourData.lastName"/>
                <h4>yor last name is : {{ yourData.lastName }}</h4>
            </div>
            <div>
                <label>enter your email</label>
                <input type="email" v-model.lazy="yourData.email"/>
                <h4>yor email name is : {{ yourData.email }}</h4>
            </div>

            <div>
            <h3>your sports</h3>
            <label>Football</label>
            <input type="checkbox" v-model="yourData.football"/>
            <h4>{{ yourData.football }}</h4>
            <label>Basketball</label>
            <input type="checkbox" v-model="yourData.basketball"/>
            <h4>{{ yourData.basketball }}</h4>
            </div>

            <div>
                <h3>Gender</h3>
                <label>Male</label>
                <input type="radio" v-model="yourData.gender" value="male"/>
                <label>Female</label>
                <input type="radio" v-model="yourData.gender" value="female"/>
                <h4>{{ yourData.gender }}</h4>
            </div>

            <div>
                <label>Bio</label>
                <textarea v-model="yourData.bio"></textarea>
                <h4>{{ yourData.bio }}</h4>
            </div>

            <div>
                <label>Grade</label>
                <select name="Grade" id="Grade" v-model="yourData.grade">
                     <option value="One">One</option>
                     <option value="Two">Two</option>
                     <option value="Three">Three</option>
                     <option value="Four">Four</option>
                </select>
                <h4>{{ yourData.grade }}</h4>
            </div>
            

            <div>
                <input @click="clickMe" type="submit" value="submit"/>
            </div>
        </form>
        <div v-show="click">
            <p>All Name is : {{ yourData.firstName }} {{ yourData.lastName }}</p>
            <p>the text is : {{ yourData.bio }}</p>
            <p>the Email is : {{ yourData.email }}</p>
        </div>


        <hr> <br><br>
        <div>
            <ul>
                <li v-for="item in newProducts" :key="item.id">
                    <p>{{ item.price }}</p>
                    <p>{{ item.category }}</p>
                    <p>{{ item.description }}</p>
                    <p>{{ item.title }}</p>
                    <img :src="item.thumbnail">
                    <hr>
                </li>
            </ul>
        </div>
        
    </div>

</template>
<script>
import theMixins from "../js/index"
export default {
    data() {
        return {
            toggle:false,
            click:false,
            numbers: [1,2,3,4,5,6],
            firstName: "omar",
            lastName: "hasan",
            yourData : {
                firstName: "",
                lastName: "",
                email: "",
                football: false,
                basketball: false,
                gender: "",
                bio: "",
                grade: "",
        }
        }
    },
    mixins:[theMixins],
    methods: {
            // sendData(){
            //     alert(`${this.yourData.firstName} \n ${this.yourData.lastName} \n ${this.yourData.email}`)
            // }
            clickMe(){
                this.click = !this.click
            }

            },
    computed:{
        fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        sumOfNumbers(){
           return this.numbers.reduce((el, ind) => el + ind)
        }
    }
        
}
</script>
<style lang="">
    
</style>