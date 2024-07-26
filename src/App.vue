<script setup lang="ts">
import ConversationStarters from './components/ConversationStarters.vue';
</script>

<template>
  <div id="app">
    <ConversationStarters />
  </div>
</template>

<style scoped>
* {

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  color: #333;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
 /*min-height: 100vh;*/
}
</style>
