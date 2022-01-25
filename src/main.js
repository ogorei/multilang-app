import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import './index.css';

Vue.config.productionTip = false

Vue.use(VueI18n);

const messages = {
  en: {
    titles:{
        title:"COVID-19 TRACKER",
        cases: "Cases",
        newCases:"New Cases",
        deaths: "Deaths",
        deathNum:"New Deaths",
        total:"Total",
        select:"Select a country",
        lang:"English"
        },
  },
  ja: {
    titles:{
        title:"新型コロナウイルスの状況",
        cases: "感染者",
        newCases:"新規感染者",
        deaths: "死亡者",
        deathNum:"人数",
        total:"合計",
        select:"国を選択",
        lang:"日本語"
        }
  },
  es: {
    titles:{
        title:"Estadisticas de COVID-19",
        cases: "Infectados",
        newCases:"Nuevos casos",
        deaths: "Muertes",
        deathNum:"Numero de muertes",
        total:"Total",
        select:"Selecciona un pais",
        lang:"Espanol",
        }
  }

};

const i18n = new VueI18n({
  locale: 'ja',
  messages: messages
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')