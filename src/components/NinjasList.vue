<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteNinja: function () {
      // eslint-disable-next-line vue/no-mutating-props
      this.ninjas.pop();
    }
  }
}
</script>

<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" :key="ninja.name" v-on:click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.specialty}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
}

</style>