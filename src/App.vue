<template>
<div>
  <app-header></app-header>
  <app-ninjas></app-ninjas>
  <app-footer></app-footer>
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
    }
  }
}
</script>

<style>


</style>
