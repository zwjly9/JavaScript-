### Sugon- 组件使用方法

#### 一、`Sugon-RadioButton`

##### 1. 基础类型：

![image-20230419150251184](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230419150251184.png)

直接调用`el-radio-group`即可，对基础样式进行覆盖重写，参数类型一致。

##### 2.图片类型

效果图：

![image-20230419153141408](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230419153141408.png)

![image-20230419153209368](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230419153209368.png)



使用方法： 

![image-20230419151643339](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230419151643339.png)

参数及方法说明：

- `v-model`:  绑定值   类型： String, Number, Boolean

- `optionList`:  `el-radio`参数列表。支持以下属性：

  1.label : Radio 的 value

  2.imgSrc: 图片资源

  3.description： 介绍内容

  4.disabled：是否禁用

- `description`: 展示类型，默认为 单选图片样式， 值为`description`时为单选列表样式

- @input：同el-radio-group的@input方法，Radio绑定值变化时触发的事件，回调参数：选中的 Radio label 值 

样例参考地址： `src/components/Sugon/Packages/SugonRadioButton/index`

#### 二、`Sugon-CheckboxGroup`

##### 1.基础类型：

![image-20230420142909771](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230420142909771.png)

直接调用`el-checkbox-group`即可，对基础样式进行覆盖重写，参数类型一致。

##### 2.图片类型：

![image-20230420142958153](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230420142958153.png)![image-20230420143007561](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230420143007561.png)

使用方法： 

![image-20230424113652275](C:\Users\zhangwj\AppData\Roaming\Typora\typora-user-images\image-20230424113652275.png)

参数及方法说明：

- `v-model`:  绑定值   类型： Array

- `optionList`:  `el-checkbox`参数列表。支持以下属性：

  1.label : checkbox的 value

  2.imgSrc: 图片资源

  3.description： 介绍内容

  4.disabled：是否禁用

- `description`: 展示类型，默认为 单选图片样式， 值为`description`时为单选列表样式

- `disabled`: checkbox-group是否禁用 

- @change：同el-checkbox-group的@change方法，绑定值变化时触发的事件，回调参数：更新后的值

样例参考地址： `src/components/Sugon/Packages/SugonCheckbox/index`



