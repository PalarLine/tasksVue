<template>
    <div>
        <label >
            {{ title }}
            <input v-model="calcValue" type="text" :class="rightPath" >
        </label>
        <div v-if="message" > OK! </div>
    </div>
</template>

<script>
    export default {
        name: 'EnterPath',

        props: {
            title: {
                type: String,
                default: null,
            },
            modelValue: {
                type: String,
                default: null
            },
            modelModifiers: {
                default: () => ({}),

            },
        },
        data() {
            return {
                rightPath: null,
                message: null
            }
        },
        computed: {
            calcValue: {
                get() {
                    return this.modelValue
                },
                set(newValue) {
                    if (this.modelModifiers.checkPath) {
                       this.isPathRight(newValue)  

                    }
                    this.$emit('update:modelValue', newValue)

                }
            }
        }, 
    methods: {
        isPathRight(value) {
            this.rightPath = 'dangerous'

            let wordLength = value.length

            let index_1  = wordLength - 3
            let index_2  = wordLength - 2
            let index_3  = wordLength - 1

            if (value[index_1] === '.'
             && value[index_2] === 'j'
             && value[index_3] === 's'){
             this.message = true
            this.rightPath = null
             }

        }
        
    },
    }
</script>

<style lang="scss" scoped>
input {
    margin: 2px;    
}
</style>