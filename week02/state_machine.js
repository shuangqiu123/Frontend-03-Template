function match(string){
    let state = start;
    for (let c of string){
        state = state(c);
    }
    return state === end;
}
function end(){
    return end;
}
function start(c){
    if (c ==='a'){
        return foundA;
    }
    return start;
}
function foundA(c){
    if (c ==='b'){
        return foundB;
    }
    // as pipeline
    return start(c);
}

function foundB(c){
    if (c ==='c'){
        return foundC;
    }
    return start(c);
}
function foundC(c){
    if (c ==='d'){
        return foundD;
    }
    return start(c);
}
function foundD(c){
    if (c ==='e'){
        return foundE;
    }
    return start(c);
}

function foundE(c){
    if (c ==='f'){
        return end;
    }
    return start;
}


console.log(match("ababcdef"));