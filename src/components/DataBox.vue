<template>
  <div class="data-box">
    <div class="shadow-md rounded bg-blue-100 p-10 text-center">
      <h3 class="text-3xl font-bold mb-4 justify-center text-blue-900">{{$t("titles.cases")}}</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">{{$t("titles.newCases")}}</span> 
        {{addComma(stats.NewConfirmed)}} 
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">{{$t("titles.total")}}</span> 
        {{addComma(stats.TotalConfirmed)}} 
      </div>
    </div>
    <div class="shadow-md rounded bg-blue-200 p-10 text-center">
      <h3 class="text-3xl font-bold mb-4 justify-center text-blue-900">{{$t("titles.deaths")}}</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">{{$t("titles.deathNum")}}</span> 
        {{addComma(stats.NewDeaths)}} 
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">{{$t("titles.total")}}</span> 
        {{addComma(stats.TotalDeaths)}} 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DataBox",
  props:{
  stats:{
    type: Object,
    default:()=>{}
  }
  },

  methods:{
    addComma(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }

}
</script>


<style>

</style>