<template>
  <div class="sidebar-logo-container" :class="{'collapse': collapse}">
    <transition name="sidebarLogoFade">
      <router-link to="/"></router-link>
    <transition>
  </div>
</template>
<script type="ts">
import { defineComponent } from "vue"

export default defineComponent({
  
})

</script>