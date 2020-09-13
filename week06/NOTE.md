# 学习笔记
# 盒
- 排版和渲染的基本单位
- 盒模型
  - margin
  - border
  - padding
  - box-sizing?: content-box and border-box
  
# 正常流 Normal Flow
- 排版过程
  - 收集盒/文字进行
  - 计算盒在行中排布
  - 计算行的排布
- IFC:
  - inline box
- BFC:
  - block-level-box
  - line-box
- 块级排布
  - float影响行盒尺寸, height,width
  - clear可以强制换行
- Margin重叠
  - margin collapse = height = max(margin1, margin2)

- 设立BFC的条件
  - float
  - absolutely positioned element
  - Block Container (不是block boxes)
  - block boxes with overflow otherthan visible

# css动画
- @keyframes的定义
- Animation属性
- Transition
