<template>
    <div>
       <label> <h4>Select a range system:</h4>
        <select v-model="selectedSystem" @change="updateSelectedSystem" >
            <option value="12">12</option>
            <option value="5">5</option>
        </select>
       </label>
    </div>
</template>
<script>
    import {  mapActions } from 'vuex'
    export default {
        name: 'ScoreSystem',
        data() {
            return {
                selectedSystem: 12,
            }
        },        
        methods: {
            ...mapActions(['changeSelectedScoreSystem']),
            updateSelectedSystem() {
                this.changeSelectedScoreSystem(this.selectedSystem);
                },
        },
    }
</script>

<style lang="scss" scoped>

</style>