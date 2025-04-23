<script>
  export default {
    data() {
      return {
        copyright: 'Copyright 2020 Vue Ninjas'
      }
    }
  }
</script>

<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>