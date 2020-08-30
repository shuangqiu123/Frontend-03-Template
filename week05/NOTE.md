第五周学习笔记
本周学习了重学CSS的第一部分
# CSS总体语法
- CSS的语法分成rule和@rule两部分
## CSS@Rule
- @charset ： https://www.w3.org/TR/css-syntax-3/
- @import ：https://www.w3.org/TR/css-cascade-4/
- @media ：https://www.w3.org/TR/css3-conditional/
- @page ： https://www.w3.org/TR/css-page-3/
- @keyframes ：https://www.w3.org/TR/css-animations-1/
- @fontface ：https://www.w3.org/TR/css-fonts-3/
- @supports ：https://www.w3.org/TR/css3-conditional/
- @namespace ：https://www.w3.org/TR/css-namespaces-3/
## CSS rule
- selector: simple selector, compound selector, complex selector
- declaration: key value pair
- 特殊的selector: 伪类
- 特殊的元素: 伪元素
# psedo-selector
- :any-link
- :link, :visited：（访问后不能改变除了颜色之外的信息）
- :hover
- :active
- :focus
- :target

# psedo-element
- ::before and ::after
- ::first-line and ::first-letter //第一行/第一个字

# 为什么 first-line 可以设置 float 之类的，而 first-line 不行呢
first line只有在块级元素display:block, inline-block, table-cell, table-caption, or list-item时候才会生效。不能用float有可能与这个有关
