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
        copyright: 'Copyright 2020'
      }
    },
    created() {
      bus.$on('change-title', (data) => {
        this.$emit('updateTitle', data);
      })
    }
  }
</script>

<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
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