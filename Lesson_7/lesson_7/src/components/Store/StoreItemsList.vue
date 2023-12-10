<template>
    <div >
        <h4>Items list:</h4>
        <div >
            <div v-for="item in getStoreItemsList" :key="item.id" class="items-list-container">
                <div> {{ item.productName}} </div>
                <div> {{ item.productPrice}}</div>
                <button @click="addItemToCart(item)" >Add to Cart</button>
            </div>
        </div>        
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'StoreItemsList',
        computed: {
            ...mapGetters(['getStoreItemsList'])
        },
        methods: {
            ...mapActions(['loadItemsList', 'addItemToCart']),

        },
        created () {
            this.loadItemsList()
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