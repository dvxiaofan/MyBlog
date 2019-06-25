<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">直达 Home</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里空空如也`,
  `我是怎么来到这里的?`,
  `这是一个 404 页面`,
  `似乎发生了一些小问题.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
