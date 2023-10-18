function test(n){
    let produce = new Array(n)
    produce.fill(0)
    // let basket = new Array(n)
    const start = performance.now();

    for(let i = 0; i < n; i++){
        produce.unshift();

    }
    const end = performance.now();
    console.log(end - start);

}

test(10000)
