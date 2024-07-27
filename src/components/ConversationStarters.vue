<script setup lang="ts">
import { ref } from 'vue'
import { starters } from '@/data/starters'
import headImage from '@/assets/images/head-927180_640.jpg'

const currentStarter = ref(starters[0])
const showDescription = ref(true)

const getRandomStarter = () => {
  const randomIndex = Math.floor(Math.random() * starters.length)
  currentStarter.value = starters[randomIndex]
}

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <div class="conversation-starter">
    <div class="header-container">
      <h2>Snackis</h2>
      <h3>Konversationsstartare</h3>
    </div>
    <div v-if="showDescription" class="description">
      <img :src="headImage" alt="People talking" class="description-image" />
      <p>Är det svårt att komma på vad ni ska prata om?</p>
      <p>
        Är du trött på att det alltid pratas om vädret, eller att ständigt få höra anekdoter om
        andras ungar eller husdjur?
      </p>
      <p>
        Kanske är det så att det bara är svårt att komma på något att prata om med en ny bekant?
      </p>

      <p>Slumpa fram nya samtalsämnen med ett enkelt knapptryck.</p>

      <button @click="toggleDescription" class="toggle-btn">Stäng</button>
    </div>
    <div v-else class="game-face">
      <button @click="getRandomStarter" class="random-btn">Slumpa fram samtalsämne</button>
      <div class="textarea-container">
        <div class="container">{{  currentStarter }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conversation-starter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
/* start header styling */
.header-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: darkcyan;
  width: 100%;
  min-width: 300px;
  padding: 10px;
  z-index: 1000;
}
h2 {
  margin-bottom: 0px;
  color: white;
}
h3 {
  margin-top: 0;
  color: white;
}
/* end header styling */

/* start intro description styling */
.description {
  position: relative;
  background-color: #fcfcfc;
  color: black;
  padding: 15px;
  padding-bottom: 75px;
  font-size: 1em;
  margin: 5px;
  margin-bottom: 20px;
  margin-top: 55px;
  text-align: left;
  max-width: 300px;
}

.description-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}
.toggle-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 100px;
  height: 45px;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 0.9em;
  background-color: darkcyan;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.toggle-btn:hover {
  background-color: lightseagreen;
}
/* end intro description styling */

/* start feature styling */
.game-face {
  margin-top: 45px;
}

.textarea-container {
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-top: 5px dotted darkcyan;
  border-bottom: 5px dotted darkcyan;
  margin-top: 45px;
  background-color: #fcfcfc;
  overflow: hidden;

}

.container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: transparent;
  color: black;
  font-size: 1.2em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  line-height: 1.5;
  box-sizing: border-box;
}
.random-btn {
  margin-top: 75px;
  padding: 10px 20px;
  width: 300px;
  height: 75px;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  background-color: lightseagreen;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 600;
  font-style: italic;
  cursor: pointer;
  transition: background-color 0.3s;
}
.random-btn:hover {
  background-color: darkcyan;
  color: white;
}

/* end feature styling */
</style>
