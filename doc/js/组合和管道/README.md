---
ct: 2019/08/01
---

# 组合和管道

## 函数组合

<<< @/doc/js/组合和管道/compose.js

## 函数管道

<<< @/doc/js/组合和管道/pipe.js

## 好处

组合或管道的方式，就是抽象单一功能的函数，然后在根据具体的业务组成复杂的功能。

当变更需求的时候，无需打破以前封装的代码，只是新增了函数功能，然后把函数进行重新组合。

传统代码编写方式，当需求变更时，只能修改原有的代码，很难不违反设计模式中的`开闭原则`。

::: tip 开闭原则
指一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。是针对我们封装，抽象出来的代码，而不是调用的逻辑代码。
:::

## 建议

由于`组合`是从右至左依次执行，而`管道`是从左至右依次执行，二者存在明显的差异。

当团队中使用`组合`或`管道`时，要统一用法，避免二者混用造成不必要的代码阅读障碍。
