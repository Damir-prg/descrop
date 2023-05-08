export const isContains = <T>(el: T, arr: Array<T>): boolean => {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === el) return true
  }
  return false
}