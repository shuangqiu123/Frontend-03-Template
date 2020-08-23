# 第三周笔记
本周继续完成了ToyBrowser的构建，实现了从html到DOM树到带CSS的DOM树的过程。
## HTML到DOM树
1. 了解了HTML的标准：https://html.spec.whatwg.org/#tokenization 和它的80多种状态，以及用状态机的实现。
- data
- tagOpen
- endTagOpen
- tagName
- beforeAttributeName
- atributeName
- beforeAttributeValue
- doubleQuotedAttributeValue
- singleQuotedAttributeValue
- unquotedAttributeValue
- afterQuotedAttributeValue
- selfClosingStartTag
2. 由于HTML的层级关系，运用栈可以很好的parse HTML到DOM树,在emit这个函数里解析token

## 加入CSS规则到DOM树
1. 了解了如何计算CSS的规则：只有知道元素的所有父元素才能判断元素与规则是否匹配
2. 了解了CSS Specificity
- 它是由4个特征组成，按优先级来拍 [inline, id, class, tagName]
- 若上层优先级相同，则看下一层。若同层优先级不同，则只比较当前层的值。
