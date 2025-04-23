<template>
  <div>
  <h1>List of Ninjas</h1>
  <ul>
    <li v-for="ninja in ninjas" :key="ninja"> {{ninja}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'NinjaTeam',
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<!--scopes style to only this component-->
<style scoped>
  h1 {
    color: green;
  }
</style>