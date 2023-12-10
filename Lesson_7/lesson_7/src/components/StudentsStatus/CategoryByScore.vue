<template>
    <div>
        <label> <h4>Select a student category:</h4>
        <select v-model="selectedCategory" @change="updateSelectedCategory" >
            <option value="5">excellent</option>
            <option value="4">well done</option>
            <option value="3">enough</option>
            <option value="2">not enough</option>
            <option value='all categories'>all categories</option>
        </select>        
        </label>
    </div>
</template>

<script>
    import {  mapActions } from 'vuex'
    export default {
        name: 'CategoryByScore',
        data() {
            return {
                selectedCategory: "all categories",
            }
        },
         methods: {
            ...mapActions(['changeSelectedCategory']),
            updateSelectedCategory() {
                this.changeSelectedCategory(this.selectedCategory);
                },
        },

    }
</script>

<style lang="scss" scoped>

</style>