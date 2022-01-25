<template>
  <div>
    <select class="w-1/5 p-4 border-2 mb-4" v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang">
          {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return { langs: ['en', 'ja', 'es'] }
  }
}
</script>

<style>
</style>