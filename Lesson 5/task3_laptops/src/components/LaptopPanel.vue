<template>
    <div>
        <laptop-card
         v-for="laptop in laptopList"
         :key="laptop.id"
         :item-data="laptop"
         />
         

    </div>
</template>

<script>
import LaptopCard from "./LaptopCard.vue";

    export default {
        name: 'LaptopPanel',

        components: {
            LaptopCard,
        },

        props: {
            laptopList: {
                type: Array,
                default:() => [] 
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>