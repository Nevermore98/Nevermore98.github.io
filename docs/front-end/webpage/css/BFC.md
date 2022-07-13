---
  title: BFC
---

块级格式化上下文（简称 BFC），形成一个独立的渲染区域，内部元素的渲染不会影响到外部元素。

## 创建 BFC

下列（常见）方式会创建 BFC：

1. 根元素（html 标签）
2. 浮动元素（float 不是 none）
3. 绝对定位元素（position 是 absolute 或 fixed）
4. overflow 不是 visible 的块级元素
5. 行内块元素（display 是 inline-block）
6. 弹性元素（display 是 flex 或 inline-flex）
7. 网格元素（display 是 grid 或 inline-grid）
8. 表格单元格（display 是 table-cell）

以上是 CSS2.1 规范定义的 BFC 触发方式，在最新的 CSS3 规范中，弹性元素和网格元素会创建 F(Flex)FC 和 G(Grid)FC。

## 应用场景

常用上述第 2、3、4 方式创建 BFC：

1. 解决外边距重叠（在兄弟元素外分别**包裹 BFC 容器**）[demo](http://js.jirengu.com/tofavapuko/1/edit?html,css,output)

2. 解决父容器高度塌陷（子元素设置浮动，脱离文档流致使父元素高度塌陷），可以使用清除浮动技巧依据计算 BFC 的高度时，浮动元素也参与计算。故**使父元素成为 BFC 容器**）[demo](http://js.jirengu.com/taguvarupa/1/edit?html,css,output)
3. 实现自适应两列布局，左侧元素浮动覆盖右侧元素，使右侧元素成为 BFC 容器）[demo](http://js.jirengu.com/taguvarupa/2/edit?html,css,output)

## 参考资料

- [带你用最简单的方式理解最全面的BFC（视频）](https://www.bilibili.com/video/BV1aZ4y1M7gW?from=search&seid=15595530134411248037)
