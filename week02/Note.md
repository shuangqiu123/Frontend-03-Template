# 学习笔记
本周学习了有限状态机，和用Node.js创造的client和server<br>
## 有限状态机
了解了有限状态机 （Finite State Machine) 这个概念， 以及在 Javascript 里的应用<br>
### 米粒状态机在js里的实现
```
input = start;
while(input){
  state = state(input);
}
```
<br>
## 浏览器渲染的步骤，一个简单的server, 和一个发HTTP请求的client
更加了解了有限状态机的实现：通过有限状态机来parse response 和 request<br>
第一次用javascript 来写了 socket programming, 之前用 C 写过 （用了一堆if else)，发现<br>
用有限状态机来写，代码更加整洁，思路更加清晰了。
