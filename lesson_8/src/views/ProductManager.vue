<template>
    <div class="container">
        <h2>Select the category:</h2>
        <div >            
            <products-category v-model="selectedCategory" />
        </div>
        <div class="section" v-if="filteredProductsList.length > 0">
            <product-panel :products-data-list="filteredProductsList" />
        </div>
    </div>
</template>

<script>
    import ProductPanel from '../components/ProductPanel.vue'
    import ProductsCategory from '../components/ProductsCategory.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {
  
        name: 'ProductManager',

        data() {
            return {
                selectedCategory: ' '
            }
        },
        components: { ProductPanel, ProductsCategory },

        computed: {
            ...mapGetters(['productsList']),

            filteredProductsList() {
                if (this.selectedCategory) {
                   return this.productsList.filter((el) => el.category === this.selectedCategory) 
                } else return this.productsList

            }
            
        },
        created() {
            this.loadProductsList(),
            this.loadProductCategory()
        },

        methods: {
            ...mapActions(['loadProductsList', 'loadProductCategory', ]),  
        },       
    }
</script>

<style  scoped>
* {
    box-sizing: border-box;
}
.container {
    max-width: 750px;
    margin: 0 auto;
}
.section {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(118, 115, 115);
}

</style>