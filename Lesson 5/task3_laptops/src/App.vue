<template>
<laptop-panel
:laptop-list="notebooksList" />
  
</template>

<script>
import LaptopPanel from "./components/LaptopPanel.vue";
import { notebooksList } from "./constants/3_data_notebooks"

export default {
  name: 'App',

  components: {
    LaptopPanel,
  },  

  data() {
    return {
      notebooksList,
    }
  },
  
  
}
</script>

<style>

</style>
