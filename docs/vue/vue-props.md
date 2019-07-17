# Vue 学习笔记(三): 父子组件通信

### 父组件通过 `props` 向子组件传递

父组件：

```
<template>
  <div>
    <child-component :list="testList">
  </div>
</template>

<script>

import ChildComponent from '@/components/ChildComponent.vue'

export default {
  name: 'home',
  components: {
    ChildComponent
  },
  data () {
    return {
      testList: ['line-1', 'line-2', 'line-3', 'line-4']
    }
  }
}
</script>
```

子组件：

```
<template>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    list: Array
  }
}
</script>

```

这样子组件就能接收并显示父组件传递过来的数据了

![效果图](http://imgs.devzhangjs.com/2019-07-17-15633336300856.jpg)

### 子组件通过`$emit`向父组件传递数据

子组件：

```
<template>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="handleClick(index)">
        {{ item }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    list: Array
  },
  methods: {
    handleClick (index) {
      this.$emit('childEvent', index)
    }
  }
}
</script>
```

父组件：
```
<template>
  <div class="home">
    <child-component :list="testList" @childEvent="childHandleClick"></child-component>
    <div>This line's index is {{ num }}</div>
  </div>
</template>

<script>

import ChildComponent from '@/components/ChildComponent.vue'

export default {
  name: 'home',
  components: {
    ChildComponent
  },
  data () {
    return {
      testList: ['line-1', 'line-2', 'line-3', 'line-4'],
      num: 'NAN'
    }
  },
  methods: {
    childHandleClick (index) {
      this.num = index
    }
  }
}
</script>
```
![效果图](http://imgs.devzhangjs.com/2019-07-17-15633336692363.jpg)


子组件中也可以这样简写：

```
<template>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="$emit('childEvent', index)">
        {{ item }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    list: Array
  }
}
</script>
```

这样就不用在逻辑里声明`methods`方法了, 效果是一样的