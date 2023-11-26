<template > 
<h3>Ноутбуки</h3>
  <div class="main-container"> 
    <aside class="filter-panel">     
        <laptop-check-box
          v-model:checkSeller.isChecked="selectedSeller"           
          v-model:checkBrand.isChecked="selectedBrand"          
        />       
    </aside>
    <section class="laptops-gallery">
        <laptops-list :laptops-list="selectedList" />       
    </section>
  </div>
</template>

<script>
import LaptopsList from "./LaptopsList.vue"
import LaptopCheckBox from "./LaptopCheckBox.vue"
import { laptops } from "@/constants/data.js"

export default {
  name: "TaskFive",

  components: {
    LaptopsList,
    LaptopCheckBox,
  },

  data() {
    return {
      laptops,
      selectedBrand: [],
      selectedSeller: [],
    };
  },

  computed: {
    selectedList() {
      const selectedBrandSet = new Set(this.selectedBrand);
      const selectedSellerSet = new Set(this.selectedSeller);

      let filteredList = laptops.slice();

      if (this.selectedBrand.length > 0) {
        filteredList = filteredList.filter((laptop) =>
          selectedBrandSet.has(laptop.brand)
        );
      }

      if (this.selectedSeller.length > 0) {
        filteredList = filteredList.filter((laptop) =>
          selectedSellerSet.has(laptop.seller)
        );
      }

      return filteredList;
    },
  },
};
</script>

<style lang="scss" scoped>

// @import './assets/style';
* {
  box-sizing: border-box;
}
h3 {
  text-align: center;
}
.main-container {
  max-width: 75vw;
  margin: 0 auto;
  display: flex;
}
.filter-panel {
  width: 120px;
  height: 100vh;
}
.laptops-gallery {
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;  
}

</style>

 