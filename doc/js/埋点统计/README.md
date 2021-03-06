---
ct: 2019/11/07
---

# 埋点 & 监控

埋点即监控用户设备环境以及在应用表现层的行为，于产品迭代而言至关重要。

获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，指明产品优化的方向。

主要分三类：

+ `数据`监控
+ `性能`监控
+ `异常`监控

## 数据监控

+ PV`(页面访问人次)`
+ UV`(页面访问人数)`
+ 页面停留时间`
+ 数据曝光量
+ 用户交互行为
+ 访问入口`

### PV & UV



## 性能监控

+ 首屏加载时间
+ 白屏时间
+ http请求时间
+ 资源下载时间
+ 页面渲染时间
+ 交互动画完成时间

## 异常监控

+ Javascript异常
+ 样式丢失异常

通过`window.onerror`或`try-catch`来捕获`Javascript`异常

## 埋点手段

基本分为3种

+ 手动埋点
+ 可视化埋点
+ 无痕埋点

### 手动埋点

在需要埋点的地方手动调用埋点接口，上传埋点数据。

+ `缺点`：
    + 开发工作量大，会入侵业务代码，对业务产生了污染，埋点成本较高，且违背了**单一职责**。
    + 必须是技术人员才能完成。
    + 容易出现埋错漏埋的情况。
+ `优点`: 
    + 产品、运营工作量少，数据精细，方便产品和运营进行数据统计分析。

### 可视化埋点

通过可视化交互的手段，代替手动埋点。

提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。

实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。

### 无痕埋点

所有事件都记录下来，定期上传记录，配合文件解析，解析出想要的数据。

优点：

+ 由于采集的是全量数据，所以产品迭代过程中无需关注埋点逻辑，不会出现漏埋、误埋等现象。

缺点：

+ 由于采集的是全量数据，会给服务器造成更大压力。
+ 无法灵活定制各个事件的具体数据。









[PageLifecycle.js 监听网页的声明周期](https://github.com/GoogleChromeLabs/page-lifecycle)

[css实现埋点](https://github.com/jbtronics/CrookedStyleSheets/blob/master/docs/README.zh.md)

[querySelector的逆事件](https://github.com/ericclemmons/unique-selector)

[MutationObserver的polyfill](https://github.com/megawac/MutationObserver.js)


https://github.com/vissense/vissense