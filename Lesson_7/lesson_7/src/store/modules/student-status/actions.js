import students from "../data/students"

export default {    
        loadStudentsList({commit}) {
          commit('updateStudentsList', students)
        },        
        changeSelectedScoreSystem({commit}, selectedSystem) {
          commit('updateScoresSystem', selectedSystem)
        },
        changeSelectedCategory({commit}, selectedCategory) {
          commit('updateCategory', selectedCategory)
        }   
      
}