# 第八周学习笔记
# tic-tac-toe
- 棋盘的实现，一维与二维数组
- AI对手，因为这个游戏状态树的复杂度很低，所以可以直接计算所有结果
- 对于更复杂的棋盘，可以使用Minimax和剪枝 (alpha-beta pruning)来做，并且很有可能只能搜到前面几层的深度

# Asynchronous javaScript
- 3种异步方法: callback, promise, async/await
- 其中async 的返回值是一个promise, await 会得到 resove/reject的值
- async 和 generator可以相结合使用
```
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
```
