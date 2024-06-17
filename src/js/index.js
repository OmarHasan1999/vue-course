const Mixins = {
    data() {
        return {
            newProducts: []
        }
    },
    methods: {
        async getProducts(){
            await fetch("https://dummyjson.com/products")
              .then((res) => res.json())
              .then((data) => (this.newProducts = data.products))
          }
  
      },

    async mounted() {
        await this.getProducts()
     },
};

 export default Mixins