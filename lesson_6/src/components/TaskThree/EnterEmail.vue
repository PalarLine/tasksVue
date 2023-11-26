<template>
    <div>
        <label > 
            {{ title }}
            <input v-model="calcValue"
                :class="bgColor"
                type="text"
                placeholder="Enter e-mail"             
                @blur="addDomainName" />                 
        </label>
        <!-- кнопка для заохочення юзера прибрати фокус з imputa :) -->
        <button>Enter</button>

    </div>
</template>

<script>
    export default {
        name: 'EnterEmail',

        props: {
            title: {
                type: String,
                default: null,
            },
            domainName: {
                type: String,
                default: '@inv.mn.edu'

            },

            modelValue: {
                type: String,
                default: null,
            },  
            modelModifiers: {
                default: () => ({})
            }          

        },
    
        data() {
            return {
                bgColor: null
            }
        },
        computed: {
            calcValue: {
                get() {
                    return this.modelValue 
                
                },
                set(newValue) {
                    if (this.modelModifiers.check)
                    this.isValid(newValue)                    
                    this.$emit('update:modelValue', newValue)
                    
                }
            }
        },

        methods: {
            addDomainName() {
                this.calcValue += this.domainName
            },

            isValid(emailValue) {
                if(emailValue) {
                    const regExp = /^[a-zA-Z0-9_.+-]+@inv\.mn\.edu$/
                if (!regExp.test(emailValue))
                this.bgColor = 'dangerous'
                else this.bgColor = null
                }
                else this.bgColor = null
                
                
            }        
    }
}
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
}
input {
    margin: 2px;    
}
</style>