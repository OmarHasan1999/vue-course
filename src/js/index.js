import { ref } from "vue"
const mixins = () => { 
  const count = ref(0)
  // const inc = () => {
  //   count.value++
  // }
  // const dec = () => {
  //   count.value--
  // }

  return { count }
}


export default mixins