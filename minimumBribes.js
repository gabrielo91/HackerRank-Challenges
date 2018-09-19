function minimumBribes(q) {
    let result = 0;
    let index = 0;
    let cuenta = 0;
    for (let value in q){
        index++
        let remains = q.slice(index, q.length)
        let internalCount = 0;
        for (let remain in remains){
           if (q[value] > remains[remain]){
               internalCount++;
               cuenta++;
               if (internalCount > 2) {
                   console.log('Too chaotic')
                   return('Too chaotic')
               }
           }
        }
    }
    console.log(cuenta)
    return cuenta
}
