<template>
    <div>
        <h4>Students average scores:</h4> 
        <div v-for="student in filteredAndSystemScores" :key="student.id" > 
            <div>{{ student.name }} - {{ student.averageScore }} </div> 
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'ScoreStudentsList',
        
        computed: {
            ...mapGetters(['filteredAndSystemScores'])

        },
        methods: {
            ...mapActions(['loadStudentsList']),
        },
        created () {
            this.loadStudentsList()
        },
       
    }
</script>

<style lang="scss" scoped>

</style>