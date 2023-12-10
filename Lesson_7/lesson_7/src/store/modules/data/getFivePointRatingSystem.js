
export  function  toFiveRateSystem(score) {
    if (score <= 3) return 2
    if (score <= 6) return 3
    if (score <= 9) return 4
    if (score <= 12) return 5
}

export function getRateCategory(category) {
    //let updateCategory 
    if (category == 2) return 'not enough'
    if (category == 3) return 'enough'
    if (category == 4) return 'well done'
    if (category == 5) return 'excellent'

}