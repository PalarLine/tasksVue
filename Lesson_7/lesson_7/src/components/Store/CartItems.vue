<template>
    <div>
        <h4>Cart:</h4>
            <div v-for="item in getCartItemsList" :key="item.id" class="items-list-container">
                    <div> {{ item.productName }} </div>
                    <div> {{ item.productPrice}} </div>
                    <div> {{ item.count }} </div>
                    <div> {{ item.cartItemSum }}</div>
                    <button @click="deleteItemFromCart(item.id)"> delete </button>
            </div>  
            <div>Total amount: {{ getTotalSumInCart }} </div>          
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'CartItems',

        computed: {
            ...mapGetters(['getCartItemsList', 'getTotalSumInCart']),                    

        },
        
        methods: {
            ...mapActions(['deleteItemFromCart']) 
            
        },
        
    }
</script>

<style lang="scss" scoped>
.items-list-container {
    width: 300px;
    margin: 2px 5px;
    display: flex;
    justify-content: space-between;
}
</style>