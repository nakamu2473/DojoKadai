<script>
export default {
  data() {
    return {
    }
  },
  methods:{
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
  }
}
</script>

<template>
  <button @click="$emit('myEvent', count+1 )">←増える</button>
</template>

<style>
</style>