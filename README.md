## Plugin for resolve soft keyboard blocks the bottom input element

### Usage

#### Syntax
```js
import inputShow from 'bundle/input-show.js';
new inputShow(input[,options])
```

**input**

* Type: `Object`|`String`
* Required

The input element or selector name

**options**

* Type: `Object`
* Optional

The options for timer. 

### Options

**delay**
* Type： `Number`
* Default: 200

等待键盘弹起延时（实际延时时间为delay+intervals）

**intervals**
* Type： `Number`
* Default: 300

元素滚到可视区域执行间隔


