<template>
    <div>
        <h4>Select the currency:</h4>
        <select v-model="selectedCurrency" >
            <option  v-for="currency in getCurrency" :key="currency.id" :value="currency.id">
                {{ currency.title }}
            </option>
        </select>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'SelectCurrency',
        data() {
            return {
                selectedCurrency: 1,
            }
        },
        computed: {
            ...mapGetters(['getCurrency'])
        },

        watch: {
            selectedCurrency(newValue) {
                this.changeCurrency(newValue);
            },
        },

        methods: {
            ...mapActions(['changeCurrency']),
        },

    }
</script>

<style lang="scss" scoped>

</style>