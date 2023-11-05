<template>
<card-panel :cards-list-data="raspberryList" />
 
</template>

<script>
import CardPanel from "./components/CardPanel.vue"
import { raspberryList } from "./constants/2_data_raspberry"

export default{
  name: 'App',
  components: {
    CardPanel,

  },
  data() {
    return {
      raspberryList,
    }
  },
}

</script>

<style>

</style>
