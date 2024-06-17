import { defineStore } from "pinia";

export const counterStore = defineStore("counterStore", {
    state : () => ({
        count: 0,
        name: "mark"
    }),

    getters:{
        plusOne() {
           return this.count + 1;
        }
    },

    actions:{
        inc(){
            this.count++
        },
        dec(){
            this.count--
        },
        changeName(){
            this.name = "Mahmoud"
        },
        $reset(){
            this.count = 0
        }
    }
})