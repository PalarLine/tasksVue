<template>
    <div class="container-filters" >
        <select v-model="selectedFilters.type" > 
            <option disabled selected> Select the transport TYPE </option>
            <option v-for="type in getCarsTypes" :key="type" :value="type">{{ type }}</option>
        </select>

        <div v-for="typebody in getCarsTypeBody" :key="typebody">
            <label > {{ typebody }}
                <input v-model="selectedFilters.bodytype"  type="radio" :value="typebody" >
            </label>
        </div>

         <select v-model="selectedFilters.brand" > 
            <option disabled selected> Select the transport BRAND </option>
            <option v-for="brand in getCarsBrand" :key="brand" :value="brand">{{ brand }}</option>
        </select>

        <select v-model="selectedFilters.model" > 
            <option disabled selected> Select the transport MODEL </option>
            <option v-for="model in getCarsModel" :key="model" :value="model">{{ model }}</option>
        </select>       

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'FilterSet',

        data() {
            return {
                selectedFilters: {
                    type: '',
                    bodytype: '',
                    brand: '',
                    model: '',
                }
                
            }
        },

        computed: {
            ...mapGetters([
                    'getCarsList',
                    'getCarsTypes',
                    'getCarsTypeBody',
                    'getCarsBrand',
                    'getCarsModel'
                   ]),
        },
        
        watch: {
            selectedFilters: {
                handler(newValue, oldValue) {
                    console.log(oldValue)
                this.addFilters(newValue);
            },
            deep: true,
    },
  },

        methods: {
            ...mapActions(['addFilters']),          
            
    },
}
</script>

<style lang="scss" scoped>
.container-filters {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}

</style>