<script setup lang="ts">
import PageIntro from '@/components/PageIntro.vue'
import PageCTA from '@/components/PageCTA.vue'
</script>

<template>
  <main class="page_main">
    <section class="content">
      <PageIntro />
      <PageCTA />
    </section>
  </main>
</template>

<style scoped>
.page_main {
  display: grid;
  align-items: center;
  min-height: 100vh;
}

.content {
  display: grid;
  align-items: center;
  row-gap: 50px;
}
</style>
