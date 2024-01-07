<template>
    <div class="container">
        <div v-for="product in productsDataList"
            :key="product.id" 
            class="product_container">
            <div class="category_img_container">
                <img :src="product.productImage" alt="picture of the good">
            </div>
            <div class="description_container">
                <div> {{ product.productTitle }}</div>           
                <div> {{ product.productDescription }}</div>
                <div> {{ product.price }}</div>
            </div>            
        </div>

    </div>
</template>

<script>
// import { mapGetters } from 'vuex'

    export default {
        name:'ProductPanel',

        props: {
            productsDataList: {
            type: Array,
            default: () => [],
            }
            
        }
//         computed: {
//   ...mapGetters(['productsList']),
 }
    // }
</script>

<style scoped>
* {
    box-sizing: border-box;

}
img {
    margin: auto auto;
    width: 80%;
  height: 80%;
  object-fit: contain;    
} 
.container {
    display: flex;
     flex-wrap: wrap;
}
.category_img_container {
    
    width: 100px;
    height: 100px;
    margin: 3px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    /* background: white;
    border-radius: 50%; */
}
.product_container {
    width: 33.33%;
    display: flex;
   
    justify-content: space-between;
    align-items: center;
    background: rgb(238, 229, 229);
}
.description_container {
    font-size: 12px;
    
}

</style>