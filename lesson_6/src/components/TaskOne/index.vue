
<template>
<div class="wrapper">Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий). </div>

<user-age-form  v-model.check.setColor="myValue" title="User age:" />
<div v-if="isValueCorrect" > Enter age not more 150</div>  
</template>

<script>
import UserAgeForm from "./UserAgeForm.vue";

export default {
  name: "TaskOne",

  components: {
    UserAgeForm,
  },

  data() {
    return {
      myValue: null,
    }

  },
  computed: {
    isValueCorrect() {
      if (!this.myValue)
      return true
      else return false
       
    }   
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 2px;
}
//@import './assets/style';

</style>
