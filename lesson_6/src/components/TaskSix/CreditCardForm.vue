<template>
    <div class="card_container">
        <div class="wrapper">
            <h4>CARD NUMBER</h4>
            <div class="card_number_container">            
                <input v-model="cardNumberValue"
                        placeholder="XXXX XXXX XXXX XXXX"
                        maxlength="19"
                        class="card_number_input"
                        @keypress="isNumberKey"
                />
                <img src="@/assets/img/visa.jpg" alt="logo Visa" />
            </div>
       </div>        
        <div class="expiry_date_and_secure_code_container">
            <div class="container">
                <h4>EXPIRY DATE</h4>
                    <div class="expiry_date_container">
                        <input v-model="expiryDateValue"
                                placeholder="MM/YY"
                                maxlength="5"
                                class="expiry_date_input"
                                @keypress="isNumberKey" 
                            />
                    </div>
            </div>   
            <div class="container">
                <h4>SECURE CODE</h4>
                    <div class="secure_code_container">
                        <input v-model="secureCodeValue"
                                maxlength="3"
                                class="secure_code_input"
                                @keypress="isNumberKey"            
                            />
                    </div>
            </div>           
        </div>       
    </div>
</template>

<script>
    import { formatExpiryDate, getFormattedNumber,  } from '@/utils/formatter'

    export default {
        name: 'CreditCardForm',

        props: {
            cardNumber: {
                type:String
            },
            cardNumberModifiers: {
            default: () => ({}),
            },
            expiryDate: {
                type: String
            },
            expiryDateModifiers: {
                default: () => ({}),
            },
            secureCode: {
                type: String
            },         
        },
        computed: {
            cardNumberValue: {
                get() {                     
                    if(this.cardNumberModifiers.divideDigits) {
                        return getFormattedNumber(this.cardNumber)
                    }
                    else
                        return this.cardNumber                    
                },
                set(newValue) {          
                   
                    if (this.cardNumberModifiers.divideDigits) {                      
                        newValue = newValue.replace(/\D/g, '')                    
                    }
                        this.$emit('update:cardNumber', newValue)
                },
            },

            expiryDateValue: {
                get() {                    
                    if (this.expiryDateModifiers.divideExpiryDate) {                  
                  return formatExpiryDate(this.expiryDate)
                    }
                    return this.expiryDate
                },
                set(newValue) {                     
                    if (this.expiryDateModifiers.divideExpiryDate) {                  
                        newValue = newValue.replace(/\D/g, '')  
                    }                  
                    this.$emit('update:expiryDate', newValue)
                }
            },

            secureCodeValue: {
                get() {
                    return this.secureCode
                },
                set(newValue) {
                    this.$emit('update:secureCode', newValue)
                }
            },
        },
        methods: {
            isNumberKey(event) {
                let charCode = event.charCode
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    event.preventDefault()
                }
            },
  
        },
    }
    
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    border-radius: 3px;
}
h4 {
    margin: 5px 0;
}
input {
    padding: 0 5px;
    margin-left: 2px;
}
input:focus {
    outline: none;
}

img {
    width: 25px;
    height: 21px;
    margin: 5px 5px;
    border: 1px solid blue;
   
}
.card_container {
    width: 300px;
    height: 187px;
    margin: 2px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid gray;
}
.card_container input {
    border: none;
}
.card_number_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;

}
.expiry_date_and_secure_code_container {
    margin-left: 5px;
    display: flex;
    justify-content: space-between;

}
.expiry_date_container,
.secure_code_container {
    width: 130px;
    border: 1px solid grey;
}
.secure_code_input,
.expiry_date_input {
    width: 125px;
    
}
.wrapper{
    margin: 0 5px;
}
.container {
    margin-right: 5px;
}
</style>