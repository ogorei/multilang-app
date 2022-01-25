<template>
  <div class="container">
  <Header/>
    <div v-if="!loading">
    </div>
    <div v-else>
      <p class="d-flex font-bold justify-center text-gray-600">Fetching Data</p>
    </div>
    <SwitchLang />
    <Country @get-country="getCountryData" :countries="countries" />
 

    <DataBox :stats="stats"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import DataBox from './components/DataBox.vue';
import Country from './components/Country.vue';
import SwitchLang from './components/SwitchLang.vue';


export default {
  name: 'App',
  components: {
    Header,
    DataBox,
    Country,
    SwitchLang
    
  },
  data(){
    return{
      lang:'ja',
      loading: true,
      title:'Global',
      countries: [],
      stats: {},
      date: '',
    }
  },
  methods:{
    async fetchCovidData(){
      const response = await fetch('https://api.covid19api.com/summary');
      const data = response.json();
      return data;
    },
    getCountryData(country){
      this.stats = country;
      this.title = country.Country;
    },

  },
  async created(){
    const caseData = await this.fetchCovidData();
    this.date = caseData.Date;
    this.countries = caseData.Countries
    this.stats = caseData.Global
    this.loading = false
  },


  }

</script>
