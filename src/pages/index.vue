<script>
import breakLineText from '../components/breakLineText.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  data() {
    return {
      articles: [],
      title:"",
      text:"",
      author:""
    }
  },
  components: {
    ArticleItem,
    breakLineText
  },
  methods: {
    addArticles(article) {
       console.log(article)
      this.articles.push(article)
    }
  }
}
</script>
<template>
    <div> home </div>
    <div> タイトル<input type=text v-model="title"></div>
    <div> 本文<textarea v-model="text"></textarea></div>
    <div> 著者<input type=text v-model="author"></div>
    <br>
    {{ title }} {{ text }} {{ author }}
    <br>
    <button @click="addArticles({ title, text, author })">保存</button>
    <br>
    <div v-for="item in this.articles">
      <ArticleItem :article="item">
        <breakLineText :text="item.text"  />
      </ArticleItem>
    </div>
</template>