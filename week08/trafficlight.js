function go() {
        console.log('绿灯开始亮');
        setTimeout(() => {
            cb1().then().then();
        }, 10000);

};

function cb1() {
    console.log('绿灯结束亮');
    return new Promise(cb2);
}

function cb2() {
    console.log('黄灯开始亮');
    setTimeout(() => {
        console.log('黄灯结束亮');
        return new Promise(cb3);
    }, 2000);

}

function cb3() {
    console.log('红灯开始亮');
    setTimeout(() => {
        console.log('红灯结束亮');
        go();
    }, 2000);
}
go();