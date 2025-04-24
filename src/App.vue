<template>
<div>
  <app-header v-bind:title="title"></app-header>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  <app-footer v-bind:title="title" @updateTitle="updateTitle"></app-footer>
</div>

</template>

<script>

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import NinjasList from "@/components/NinjasList.vue";

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'app-ninjas': NinjasList
  },
  data() {
    return {
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ],
      title: 'Vue Ninjas'
    };
  },
  methods: {
    updateTitle(newTitle) {
      this.title = newTitle;
    }
  }
}
</script>

<style>


</style>
