<template>
<div class="wrapper">Задача 4. Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні відповідних модифікаторів відповідних полів input:
    • ім’я користувача -  у випадку порожнього поля (червони фон) 
    • вік (вік менший за 18 – колір фону червоний, інакше – зелений).</div>
  <user-data-form
  v-model:login.checkDangerous="myUserName"
  v-model:userAge.checkDangerous.checkSuccess="myUserAge" 
  titleUserName="Enter User Name:"
  titleUserAge="Enter User Age"
  />
</template>

<script>
import UserDataForm from "./UserDataForm.vue"

export default {
  name: "TaskFour",
  components: {
    UserDataForm,
  },

data() {
  return {
    myUserName: null,
    myUserAge: null,
    
  }
},
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 2px;
}
//@import './assets/style'
</style>
