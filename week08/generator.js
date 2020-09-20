function sleep(){
    return new Promise(resolve=>{
        setTimeout(resolve,1000);
    });
}


async function* generator(){
    let i = 0;
    while (true){
        await sleep();
        yield i++;
    }
}

async function counter(){
    for await (let v of generator()){
        console.log(v);
    }
}
counter();