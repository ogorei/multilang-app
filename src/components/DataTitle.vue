<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold">{{text}}</h1>
    <div class="text-2xl my-4">
      {{formatTime}}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "DataTitle",
  props:{
    text: {
      type: String,
      default:''
    },
    dataDate:{
      type: Number,
      default:0
      }
  },
  computed:{
    formatTime: function(){
      return moment(this.dataDate).format('MMMM Do YYYY')
    }
  }




}
</script>

<style>

</style>