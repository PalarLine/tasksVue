export function getSetFromData(arr, key) {
  let newDataSet = new Set()
  arr.forEach((item) => {
    newDataSet.add(item[key])
  })
  return Array.from(newDataSet)
}
//===================================================
export function matchToFilter(object, filter) {
  for (const elem in filter) {
    if (filter[elem] && filter[elem] !== object[elem]) return false;
  }
  return true;
}