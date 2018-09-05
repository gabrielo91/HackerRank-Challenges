function minimumBribes(q) {
    let result = 0;
    for (let position =0; position < q.length; position++){
        let currentValue = q[position]
        let minPositionValue = currentValue-2
        let maxPositionValue = currentValue+2
        let currentPosition = position + 1
        
        if(currentPosition<minPositionValue){
            result = 'Too chaotic';
            break;
        } else if (currentValue > currentPosition) {
            result = result + currentValue - currentPosition
        }
    }
    console.log(result)
    return result

}
