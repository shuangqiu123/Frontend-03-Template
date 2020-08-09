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
    if (c ==='a'){
        return foundA2;
    }
    return start(c);
}

function foundA2(c){
    if (c==='b'){
        return foundB2;
    }
    return start(c);
}

function foundB2(c){
    if (c==='a'){
        return foundA3;
    }
    return start(c);
}

function foundA3(c){
    if (c==='b'){
        return foundB3;
    }
    return start(c);
}

function foundB3(c){
    if (c==='x'){
        return end;
    }

    return foundB2(c);
}

console.log(match('abababababx'));