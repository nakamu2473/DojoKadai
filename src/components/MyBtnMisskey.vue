<script>
export default {
  data() {
    return {
        str: "みす"
    }
  },
  methods:{
    btnMisskey () {
      return this.str = this.str + "みすきー"
    },
    btnMisssys () {
      return this.str = this.str + "しす"
    },
    btnMisstems () {
      return this.str = this.str + "てむず"
    }
  }
}
</script>
<template>
    {{ this.str }}<button @click="btnMisskey">みすきー</button><button @click="btnMisssys">しす</button><button @click="btnMisstems">てむず</button>
</template>