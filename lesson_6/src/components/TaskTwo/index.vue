<template>
<div class="wrapper">Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.</div>

<enter-path v-model.checkPath="myValue"  title="Enter URL to .js file"  />
 
</template>

<script>
import EnterPath from "./EnterPath.vue";

export default {
  name: "TaskTwo",
  
  components: {
    EnterPath
  },
  data() {
    return {
      myValue: null
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
