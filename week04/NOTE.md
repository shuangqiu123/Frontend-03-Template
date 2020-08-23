本周学习了浏览器从一棵带CSS的DOM树到渲染成图像的步骤
# DOM with CSS 通过排版 (layout) 确定位置
ToyBrowser使用了flex的排版，是css排版中的二代目，第一代是正常流，第三代是grid<br>
它是更为强大的二维系统。
flex排版分主轴 （main axis) 和 横轴 cross axis, 有Left, width, right, height 一系列属性
并且在不同状态下，这些属性的会变化。例如，当主轴为row时，主轴上的属性为width
flex布局还会被具有带flex属性的元素影响，以及被flex-wrap属性影响。

# 从排版到生成位图
使用了Imgaes包的函数来渲染最后的图片，过程非常简单，只要递归调用dom树即可。
最后的图片：
![Image of rendering](https://github.com/shuangqiu123/Frontend-03-Template/blob/master/week04/viewPort.jpg)
