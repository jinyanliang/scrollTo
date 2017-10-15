# scrollTo
> 1.0.0
>
> 为原有的scrollTo方法添加滚动过渡动画
> 会替换原有的window.scrollTo()方法


##API
###top(string time = 300)
滚动至顶部

###bottom(string time = 300)
滚动至底部

###designated(number position, string time = 300)
滚动至指定位置

##示例
```javascript
scrollTo.top()
scrollTo.designated(2000, 3000)
```
