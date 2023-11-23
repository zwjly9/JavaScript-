### 项目访问地址： http://218.11.13.196:8024/

### 一、首页

![image-20220406154835739](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406154835739.png)

​	首页未设置登录校验逻辑，直接点击登录即可实现跳转（项目内置登录跳转逻辑，方便后续功能性扩展）

### 二、工作台

![image-20220406163118088](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406163118088.png)

​	工作台定义了三个工作模块：生产安全，企业信息，开发中（三个模块均为数据配置读取，后续可根据账号权限进行扩展）。

##### 生产安全模块：点击该模块进入系统主页面宏观模式。

- 宏观模式-城市级别
  1. 地图标记点以及全屏按钮均可进行地图缩放，调整范围至区县级别。
  2. 右上角”🏠“按钮点击可返回系统工作台。

![image-20220406163558738](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406163558738.png)

- 宏观模式-区县级别
  1. 左侧企业列表与地图标记点绑定，点击具体某个企业，地图进行放大，中心点设置为该企业的经纬坐标。
  2. 点击地图标记点，进入中观模式（卫星云图）。
  3. 点击返回按钮返回宏观模式-城市级别。

![image-20220406165139323](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406165139323.png)

- 中观模式

  1. 左侧列表切换显示企业信息
  2. 点击中间弹窗企业全景进入微观模式
  3. 点击返回按钮返回宏观模式-区县级别

  ![image-20220406165657934](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406165657934.png)

- 微观模式

  1. 左侧显示当前企业监控信息
  2. 点”视频监控“标签 - 再点击查看按钮即可查看当前摄像头监控画面（内置视频标签，方便后续扩展）
  3. 点击返回按钮返回上一级（查看视频时点击返回微观模式主页面，微观模式主页面内点击返回中观模式）

  ![image-20220406172654896](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406172654896.png)

  ##### ![image-20220406172842603](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20220406172842603.png)

  

##### 企业模块、开发中模块：点击该模块进入正在开发提示，数秒后自动返回。

```javascript
let a = 'a '
console.log('a') 
```



```
```