<script>
import breakLineText from '../components/breakLineText.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  data() {
    return {
      num: 0,
      num2: 0,
      num3: 0,
      operator: "",

    }
  },
  methods: {
    inputNum(i) {
       console.log(i)
       if (this.operator == ""){
        this.num = this.num * 10 + i
       } else {
        this.num2 = this.num2 * 10 + i
       }
       console.log(this.num)
    },
    addNum() {
      this.operator = "+"
    },
    subtractNum(){
      this.operator = "-"
    },
    multiplyNum(){
      this.operator = "*"
    },
    divideNum(){
      this.operator = "/"
    },
    calNum(){
      switch(this.operator) {
        case "+":
          this.num3 = this.num + this.num2
          break;
        case "-":
          this.num3 = this.num - this.num2
          break;
        case "*":
          this.num3 = this.num * this.num2
          break;
        case "/":
          this.num3 = this.num / this.num2
          break;
        default:
      }
      
    },
    clearNum() {
      this.num = 0
      this.num2 = 0
      this.num3 = 0
      this.operator = ""
    }
  }
}
</script>
<template>
  <p>数1：{{ num }}</p>
  <p>数2：{{ num2 }}</p>
  <p>計算結果：{{ num3 }}</p>
  <table>
    <tr>
      <td v-for="i in 9"><button  @click="inputNum(i)">{{ i }}</button></td>
    </tr>
    <tr>
      <td><button  @click="addNum()">+</button></td>
      <td><button  @click="subtractNum()">-</button></td>
      <td><button  @click="multiplyNum()">*</button></td>
      <td><button  @click="divideNum()">/</button></td>
    </tr>
    <tr>
      <td><button  @click="clearNum()">c</button></td>
      <td><button  @click="calNum()">=</button></td>
    </tr>
  </table>
</template>