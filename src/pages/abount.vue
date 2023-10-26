<script>
import MyBtnIncrement from '../components/MyBtnIncrement.vue'
import MyBtnMisskey from '../components/MyBtnMisskey.vue'


export default {
  components: {
    MyBtnIncrement,
    MyBtnMisskey
  },
  data() {
    return {
    }
  },
}
</script>
<template>
    <div> abount </div>
    <div>
        <MyBtnIncrement/><MyBtnIncrement/><MyBtnIncrement/>
    </div>
    <div>
        <MyBtnMisskey/>
    </div>
</template>
<style scoped>
span {
    color:#3f7fbf;
}
</style>
