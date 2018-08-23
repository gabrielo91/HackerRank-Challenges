// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let summArray = []
    for (let row = 0; row < 4; row++){
        for (let column = 0; column < 4; column++){
            let sum = arr[row][column] + arr[row][column+1] + arr[row][column+2] 
                + arr[row+1][column+1]
                + arr[row+2][column] + arr[row+2][column+1] + arr[row+2][column+2] 
            summArray.push(sum)
        }
    }
    console.log(summArray)
    return Math.max.apply(null, summArray)
}
