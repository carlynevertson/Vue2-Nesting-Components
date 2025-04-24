<script>
  import {bus} from '../main';
  export default {
    props: {
      title: {
        type: String,
      }
    },
    data() {
      return {

      }
    },
    methods: {
      changeTitle: function() {
        // this.$emit('change-title', 'Vue Wizards');
        // this.title = 'Vue Wizards';
        bus.$emit('change-title', 'Vue Wizards')
      }
    }
  }
</script>

<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>