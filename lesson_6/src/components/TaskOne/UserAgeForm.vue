<template>
    <label>
  {{ title }}
  <input type="text" v-model="calcValue" :class="setBackground">
</label>

</template>

<script>
    export default {
        name: 'UserAgeForm',        

        props: {
            title: {
                type: String,
                default: null,
            },

            modelValue: {
                type: Number,
                default: null,
            },
            modelModifiers: {
                default: () => ({}),
            }
            
        },
        data() {
            return {
                setBackground: null,
                
            }
        },

        computed: {
            calcValue: {
                get() {                    
                    return this.modelValue;
                    },
                set(val) {
                    if (this.modelModifiers.check) {
                        if (val > 150) val = null
                    }
                    if (this.modelModifiers.setColor) {
                        this.selectBackground(val)
                    }
                    this.$emit('update:modelValue', val)
                }                 
            },
        },
        methods: {
            selectBackground(val) {

                if (val && val < 10 ) this.setBackground = 'age-less10'
                else
                    
                if (val && val <= 21) this.setBackground = 'age-more10-less21'
                else
                    
                if (val && val > 21 ) this.setBackground  = 'age-more21'
                else this.setBackground  = null                                     
                },
            
            }
        
    }
</script>

<style lang="scss" scoped>
input {
    margin: 2px;    
}


</style>