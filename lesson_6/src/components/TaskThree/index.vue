<template>
<div class="wrapper">Задача 3. Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний.</div>
<div>Enter your e-mail address before "@" and press Enter:</div>
<enter-email v-model.check="appValue" title='Your e-mail '  />
</template>

<script>
import EnterEmail from "./EnterEmail.vue"

export default {
  name: "TaskThree",
  components: {
    EnterEmail,
  },
  data() {
    return {
      appValue: null,
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 2px;
}
//@import './assets/style';
</style>
