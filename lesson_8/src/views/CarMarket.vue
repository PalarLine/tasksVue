<template>
<div class="container">
    <div>
        <filter-set  />
    </div>

    <div  >
        <div v-for="car in getFilteredCarsList" :key="car.id">
            <car-item-card :card="car"/>        
        </div>
    </div>    
</div>     
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CarItemCard from '../components/CarItemCard.vue'
import FilterSet from '../components/FilterSet.vue'

    export default {
  
        name:'CarMarket',
        components: {  CarItemCard, FilterSet },
       
        computed: {
            ...mapGetters(['getFilteredCarsList'])
            
        },
        created () {
            this.loadCarsList()
        },

        
        methods: {
            ...mapActions(['loadCarsList']),
            
        },
    }
</script>

<style lang="scss" scoped>
.container-filter {
    display: flex;
}
.container {
    display: flex;
    // flex-direction: column;
}

</style>