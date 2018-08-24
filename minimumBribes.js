function minimumBribes(q) {
    let result = 0;
    for (let position =0; position < q.length; position++){
        let currentValue = q[position]
        let minPositionValue = currentValue-2
        let maxPositionValue = currentValue+2
        let currentPosition = position + 1
        if(currentPosition<minPositionValue || currentPosition>maxPositionValue){
            result = 'Too chaotic';
            break;
        } else {
            result = 3;
        }
    }
    console.log(result)
    return result

}
