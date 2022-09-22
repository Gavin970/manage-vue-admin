<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.content {

}
</style>
