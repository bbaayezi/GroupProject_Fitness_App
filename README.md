# groupproject_fitness_app

## Demo Branch

此分支主要用作学习用途，包括测试vue语法，组件，通信，vue router路由，vuex

状态管理等等

### Tutorial

`.vue`文件的编写格式：



首先创建一个新的`.vue`文件，文件结构如下

```vue
<template>
	...
</template>


<script>
	...
</script>

<style>
	...
</style>
```



在`template`标签内编写包括HTML以及vue组件在内的代码，`script`标签内用于编写js代码以及与vue相关的一些代码。注册vue组件的代码示例如下

```vue
// 导入组件
import 'Component' from '';

export default {
	data() {

	},
	components: {
		// 在此处写组价名，格式为键值对，如
		myComponent: Component,
		// 如果不写键值对，根据ES6语法，默认解析为键名与值名一致，如
		Component, // 等效于Component: Componet
	}
}
```



[更详细的文档请参阅<-](https://cn.vuejs.org/v2/guide/single-file-components.html)

