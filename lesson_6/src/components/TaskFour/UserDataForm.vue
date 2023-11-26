<template>
    <div>
        <label>
            {{ titleUserName }}
            <input v-model="loginValue"   type="text" :class="setBackgroundLogin" >
        </label>
        <label>
            {{ titleUserAge }}
            <input v-model="ageValue" type="number" :class="setBackgroundAge" >
        </label>

    </div>
</template>

<script>
    export default {
        name: 'UserDataForm',

        props:{
           titleUserName: {
            type: String,            
           },

           login:{
            type: String,
            default: null
           },

           loginModifiers: {
            default: () => ({})
           },

           titleUserAge: {
            type: String,
            
           },
           userAge: {
            type: Number,
            default: null

           },
           ageModifiers: {
            default: () => ({})
           }           
        },

        data() {
            return {
                setBackgroundLogin: 'dangerous',
                setBackgroundAge: null,
            }
        },
        computed:{
            loginValue: {
                get() {
                    return this.login
                },
                set(newLogin) {
                    if (this.loginModifiers.checkDangerous)
                        if (!newLogin) this.setBackgroundLogin = this.selectedBackgroundDangerous()
                        else this.setBackgroundLogin = null
                    this.$emit('update:login', newLogin)
                }

            },
            ageValue: {
                get() {
                    return this.userAge
                },
                set(newAge) {
                    if (this.loginModifiers.checkDangerous) 
                        if (newAge < 18) 
                            this.setBackgroundAge = this.selectedBackgroundDangerous()
                        else if (newAge >= 18 )
                            this.setBackgroundAge = this.selectedBackgroundSuccess()
                    
                        if (!newAge) this.setBackgroundAge = null
                        
                    this.$emit('update:userAge', newAge)
                }
            }
        },
        methods: {
            selectedBackgroundDangerous() {
            return 'dangerous'
            },
            selectedBackgroundSuccess() {
            return 'success'
            }
            
        },
        
    }
</script>

<style lang="scss" scoped>
input {
    margin: 2px;    
}
</style>