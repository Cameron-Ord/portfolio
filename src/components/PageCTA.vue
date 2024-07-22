<script setup lang="ts"></script>

<template>
  <div class="call_to_action">
    <h2 class="action_tag">About</h2>
    <h2 class="action_tag">Projects</h2>
    <h2 class="action_tag">Contact</h2>
  </div>
</template>

<style scoped>
.call_to_action {
  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: start;
  row-gap: 10px;
  column-gap: 15px;
  width: 90%;
}

.action_tag {
  color: var(--purple);
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
  padding-top: 2px;
  border: solid var(--purple) 1px;
  border-radius: 4px;
}
</style>
