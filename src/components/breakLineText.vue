<script>
export default {
  props: {
    text: {
      type: String
    },
  },
  data() {
    return {
        wrappedText: this.text.replaceAll('\n', '<br>')
    }
  }
}
</script>
<template>
    <div> <p v-html=wrappedText /></div>
    
</template>