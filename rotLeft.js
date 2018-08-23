// Complete the rotLeft function below.
function rotLeft(a, d) {
    let shifts = d
    let rotatedArray = []
    const arraySize = a.length
    if (shifts > arraySize) {
        shifts = shifts%arraySize
    }
    let rotatedValues = a.slice(0, shifts)
    let slicedArray = a.slice(shifts, a.length)
    a = slicedArray.concat(rotatedValues)
    return a
}
