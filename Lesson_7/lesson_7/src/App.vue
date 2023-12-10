<template>

<div class="container">
  <div class="task-container">
    <h2>Task 1</h2>
    <div class="element">
      <score-students-list />
    </div>
    <div class="element">
      <score-system />
    </div>
    <div class="element">
      <category-by-score />
    </div> 
  </div>

  <div class="task-container">
    <h2>Task 2</h2>  
    <div class="element">
      <select-items-list />
    </div>  
    <div class="element">
      <select-currency />
    </div>
    <div class="element">
      <cart-items />
    </div>      
  </div>
</div>

</template>

<script>
import ScoreStudentsList from './components/StudentsStatus/ScoreStudentsList.vue'
import ScoreSystem from './components/StudentsStatus/ScoreSystem.vue'
import CategoryByScore from './components/StudentsStatus/CategoryByScore.vue'

import CartItems from './components/Store/CartItems.vue'
import SelectCurrency from './components/Store/SelectCurrency.vue'
import SelectItemsList from './components/Store/StoreItemsList.vue'

export default {
  name: "App",
  components: {
    ScoreStudentsList,
    ScoreSystem,
    CategoryByScore, 

    CartItems,
    SelectCurrency,
    SelectItemsList
  },  
}
</script>

<style lang="scss">
@import './assets/style/common-styles/index';
.container {
  margin: 0 auto;
  background-color: greenyellow;
}
.task-container {
  min-width: 300px;
  margin: 2px;
  padding: 3px;
  border: 2px solid gray;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
}
.element {
  margin: 1px;
  padding: 1px;
  border: 0.5px solid gray;
  border-radius: 2px;
}
</style>
