<template>
<credit-card-form v-model:cardNumber.divideDigits="userCardNumber"
                  v-model:expiryDate.divideExpiryDate="userExpiryDate"
                  v-model:secureCode="userSecureCode"
                />
               
</template>

<script>
import CreditCardForm from './CreditCardForm.vue'

export default {
  name: "TaskSix",

  components: {
    CreditCardForm,
  },

  data() {
    return {
      userCardNumber: '',
      userExpiryDate: '',
      userSecureCode: '',
    }
  },
}
</script>

<style lang="scss" scoped>

//@import "./assets/style/";
</style>
