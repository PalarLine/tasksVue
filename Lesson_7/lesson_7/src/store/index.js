import { createStore } from "vuex"

import studentStatusModule from './modules/student-status'
import storeModule from './modules/store'

export default createStore({
  modules: {
    studentStatusModule,
    storeModule,
  }
  
});
