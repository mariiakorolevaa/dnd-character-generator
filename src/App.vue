<script setup>
import CharacterGenerator from "./components/CharacterGenerator.vue";
</script>

<template>
  <div class="app-container">
    <h1>Fantasy Character Generator</h1>
    <CharacterGenerator />
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-family: 'Gabriela', sans-serif;
}
</style>
