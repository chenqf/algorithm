(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,s,a){t.exports=a.p+"assets/img/1.5e991a64.gif"},186:function(t,s,a){t.exports=a.p+"assets/img/2.d7466f97.gif"},187:function(t,s,a){t.exports=a.p+"assets/img/3.c18461d2.gif"},197:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"图片优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),n("p",[n("code",[t._v("渲染")]),t._v("：图片加载不阻塞页面渲染。")]),t._v(" "),n("h2",{attrs:{id:"渐进式图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渐进式图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 渐进式图片")]),t._v(" "),n("p",[t._v("允许在加载照片的时候，如果网速比较慢的话，先显示一个类似模糊有点小马赛克的质量比较差的照片，然后慢慢的变为清晰的照片：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(185),alt:""}})]),t._v(" "),n("p",[n("code",[t._v("优点")]),t._v("：一开始就决定了大小，不需要从上至下加载，不会造成多次回流")]),t._v(" "),n("p",[n("code",[t._v("缺点")]),t._v("：需要消耗更多的CPU去多次计算渲染")]),t._v(" "),n("h2",{attrs:{id:"非渐进式图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非渐进式图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 非渐进式图片")]),t._v(" "),n("p",[t._v("渐进式的图片(Baseline JPEG)则会老老实实地从头到尾去加载：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(186),alt:""}})]),t._v(" "),n("p",[n("code",[t._v("优点")]),t._v("：消耗更少的CPU")]),t._v(" "),n("p",[n("code",[t._v("缺点")]),t._v("：需要从上至下加载，会造成多次回流")]),t._v(" "),n("h2",{attrs:{id:"css渐变背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css渐变背景","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS渐变背景")]),t._v(" "),n("p",[t._v("网速慢，图片还没加载完，会有一段空白时间。")]),t._v(" "),n("p",[t._v("在空白时间内，使用css渐变色背景来填充。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(187),alt:""}})]),t._v(" "),n("p",[n("a",{attrs:{href:"https://tools.w3clubs.com/gip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线转换的地址"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"响应式图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应式图片")]),t._v(" "),n("p",[t._v("普通屏和高清屏使用不同大小的图片")]),t._v(" "),n("p",[t._v("背景图片，使用"),n("code",[t._v("css")]),t._v("的"),n("code",[t._v("@media")]),t._v("进行媒体查询")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bg")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"bg.png"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-min-device-pixel-ratio")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-device-pixel-ratio")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bg")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"bg@2x.png"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" // 尺寸为200 * 200的图\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("img标签，使用H5中的"),n("code",[t._v("srcset")]),t._v("来达到效果")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("320"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg@2x.png"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg.png 1x;bg@2x.png 2x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("当设备像素密度，也就是dpr(devicePixelRatio)为1时，使用bg.png，为2时使用二倍图bg@2x.png，依此类推，你可以根据需要设置多种精度下要加载的图片，如果没有命中，浏览器会选择最邻近的一个精度对应的图片进行加载。")])])},[],!1,null,null,null);s.default=e.exports}}]);