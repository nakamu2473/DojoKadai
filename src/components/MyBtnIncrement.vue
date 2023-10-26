<script>
export default {
  data() {
    return {
        count: 0
    }
  },
  methods:{
    btnIncrement () {
      return this.count++
    }
  }
}
</script>
<template>
    {{ this.count }}<button @click="btnIncrement">←増える増える</button>
</template>