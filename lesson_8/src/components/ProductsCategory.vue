<template>
    <div  class="category_container" > 
        <div v-for="category in productsCategory"
                    :key="category.categoryTitle">                    
            <label>            
                <input  v-model="currentCategory"
                    type="radio"
                    :value="category.categoryTitle"
                >
                <div class="category_img_container">
                    <img :src="category.image">
                </div>            
                <p> {{ category.categoryTitle }} </p>
            </label>
        </div>        
    </div>
   
    <div class="category_container"> 
        <input v-model="currentCategory"
                :key="currentCategory"
                :value="currentCategory"
                disabled />  
        <button @click="clearCategory">All categories</button>  
        
    </div>
   
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ProductsCategory',

        props: {
            modelValue: {
                type: String,
                default: 'TV'
            }
        },
        emits: ['update:modelValue'],        
        // data() {
        //     return {
        //         selectedCategory: 'TV',
        //     }
        // },
        computed: {
            ...mapGetters(['productsCategory', 'selectedCategory']),

            currentCategory: {
                get() {
                    return this.modelValue

                },
                set(newValue) {
                                      
                    this.$emit('update:modelValue', newValue)

                }
            }
        },
        // watch: {
        // selectedCategory(newValue) {
        //     console.log(newValue)
        //     this.newSelectedCategory(newValue);
        // },
    // },
        methods: {
            clearCategory() {
                this.$emit('update:modelValue', '');
            },
        },

    }

</script>

<style  scoped>
p {
    text-align: center;
    padding: 3px;
}
button {
    cursor: pointer;
}
img {
    margin: auto auto;
    width: 80%;
  height: 80%;
  object-fit: contain;    
} 
input {
    border: 0;
    background: transparent;
}
label > input {
    visibility: hidden;
    position: absolute;
}
label > input + div {
    cursor: pointer;
    border: 2px solid transparent;
}
label > input:checked + div {
    border: 2px solid red;
}
.category_container {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    border: 1px solid gray;
    background: rgb(238, 229, 229);
}
.category_img_container {
    width: 100px;
    height: 100px;
    margin: 3px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    background: white;
    border-radius: 50%;
}

</style>