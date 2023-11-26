<template>
<div class="tasks-container">
  <div class="task"> <task-one /></div>
  <div class="task"> <task-two /></div>
  <div class="task"> <task-three /></div> 
  <div class="task"> <task-four /></div>
  <div class="task"> <task-five /></div>
  <div class="task"> <task-six /></div> 
</div>
  
</template>

<script>
import TaskOne from "./components/TaskOne"
import TaskTwo from "./components/TaskTwo"
import TaskThree from "./components/TaskThree"
import TaskFour from "./components/TaskFour"
import TaskFive from "./components/TaskFive"
import TaskSix from "./components/TaskSix"


export default {
  name: "App",
  components: {
    TaskOne,
    TaskTwo,
    TaskThree,
    TaskFour,
    TaskFive,
    TaskSix,
  },
};
</script>

<style lang="scss">
@import './assets/style';

.tasks-container {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
.task {
  border: 2px solid gray;
  border-radius: 2px;
}

</style>
