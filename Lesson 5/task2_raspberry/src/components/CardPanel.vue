<template>
    <div >
       <card-item 
       v-for="card in cardsListData"
        :key="card.id"
        :card-data="card"
        />
    </div>
</template>

<script>
import CardItem from './CardItem.vue'
    export default {
        name: 'CardPanel',
        components: { CardItem },

        props: {
            cardsListData: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
    

</style>