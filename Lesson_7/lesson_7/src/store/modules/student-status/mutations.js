import { toFiveRateSystem } from "../data/getFivePointRatingSystem"

export default {
    updateStudentsList(state, list ) {
        state.studentsList = list.map((student) => ({
          ...student,
          scoreInFiveRateSystem: toFiveRateSystem(student.averageScore), 
        }))
      },
      scoresByFiveRatedSystem(state) {
        return state.studentsList.map((student) => ({
          ...student,
          scoreInFiveRateSystem: toFiveRateSystem(student.averageScore), 
        }))
      },
      updateScoresSystem(state, newValue) {
        state.selectedScoreSystem = newValue
      },
      updateCategory(state, newValue) {
        state.selectedCategory = newValue
      }
  
}