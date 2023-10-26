<script>
export default {
  props: {
    article: {
      type: Object
    },
  },
  methods:{
  }
}
</script>
<template>
    <h1>タイトル：{{ this.article.title }}</h1>
    本文： <slot></slot>
       
    <div>書いた人：{{ this.article.author }}</div>
    <br>
</template>