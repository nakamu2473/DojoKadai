<script> 
export default {

  props: {
    txt: {
      type: String,
      default: "Hi"
    },
    theme: {
      type: String,
    }
  },
  computed: {
    btnStyle: function () {
    if(this.theme ==="primary"){
      return {
        backgroundColor: "green",
        fontWeight: "bold",
      }
    }else if(this.theme ==="danger"){
      return {
        backgroundColor: "red",
        fontWeight: "bold",
      }
    }else {
      return {}
    }
    }
  }
}
</script>

<template>
  <button :style=btnStyle>{{txt}}</button>
</template>

<style>
</style>