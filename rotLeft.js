function rotLeft(a, d) {
    console.log('a')
    console.log(a)
    console.log('d')
    console.log(d)
    let shifts = d
    let rotatedArray = []
    const arraySize = a.length
    if (shifts > arraySize) {
        shifts = shifts%arraySize
    }
    for(let i=0; i<shifts; i++){
        rotatedArray = rotate(a)
        a = rotatedArray
    }
    
    return rotatedArray
}

function rotate(arr){
    const firstValue = arr[0]
    let rotatedArray = arr.slice(1, arr.length)
    rotatedArray.push(firstValue)
    return rotatedArray
}
