export default {
    scoresBySelectedSystem(state) {
        if (state.selectedScoreSystem == 5) {
          return state.studentsList.map((student) => {
             return ({
                    ...student, 
                    averageScore:  student.scoreInFiveRateSystem
                  })         
            }) 
        }
          else return  state.studentsList           
      },
  
      filteredAndSystemScores(state, getters) {
        const isScoresSystemChange = getters.scoresBySelectedSystem;
        if (state.selectedCategory !== 'all categories') {
          return isScoresSystemChange.filter((student) => student.scoreInFiveRateSystem == state.selectedCategory);
        } else {
          return isScoresSystemChange;
        }
      },
}