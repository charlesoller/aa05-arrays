function test(n){
    let produce = new Array(n)
    produce.fill(0)
    let basket = new Array(n)

    for(let i = 0; i < n; i++){
        const start = performance.now();
        basket.push(produce[i])
        const end = performance.now();
        console.log(end - start);
    }

}

test(1000)
