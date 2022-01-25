<template>
  <select class="w-full p-4 border-2 mb-4" v-model="selected" @change="onChangeCountry()" name="" id="">
    <option value="0">{{$t("titles.select")}}</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">
      {{country.Country}}
    </option>
  </select>
</template>

<script>
export default {
name: "Country",
props:['countries'],
data(){
  return{
    selected: 0
  }
},

methods:{
  onChangeCountry(){
    const country = this.countries.find((item )=> item.ID === this.selected)
    this.$emit('get-country', country)
  }
}

}
</script>

<style>

</style>