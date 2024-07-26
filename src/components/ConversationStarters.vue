<script setup lang="ts">
import { ref } from 'vue';
import { starters } from '@/data/starters';

const currentStarter = ref(starters[0]);

const getRandomStarter = () => {
    const randomIndex = Math.floor(Math.random() * starters.length);
    currentStarter.value = starters[randomIndex];
};
</script>

<template>
    <div class="conversation-starter">
        <h2>Konversationsstartare</h2>
        <div class="description">
            <p>Är det svårt att komma på vad ni ska prata om? Är du trött på att det alltid pratas om vädret, eller att ständigt få höra anekdoter om andras ungar eller husdjur? Kanske är det så att det bara är svårt att komma på något att prata om med en ny bekant?</p> 
            <p>Slumpa fram ett nytt samtalsämne genom att trycka på knappen.</p>

        </div>
        <button @click="getRandomStarter">Slumpa fram samtalsämne</button>

        <textarea class="container" readonly v-model="currentStarter"></textarea>
    </div>
</template>

<style scoped>
.conversation-starter {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}
h2 {
    margin-bottom: 25px;
    color: white;
    background-color: darkcyan;
    width: 380px;
}

.description {
    background-color: white;
    color: black;
    padding: 15px;
    font-size: 1em;
    margin: 5px;
    margin-bottom: 20px;
    text-align: left;
    max-width: 300px;
    border-radius: 20px;
}

.container {
    width: 300px;
    height: 250px;
    margin-top: 20px;
    padding: 30px 20px;
    background-color: white;
    color: black;
    font-size: 1.2em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border-radius: 20px;
    border-left: none;
    border-right: none;
    border-top: 5px dotted darkcyan;
    border-bottom: 5px dotted darkcyan;
    resize: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
}
button {
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
button:hover {
    background-color: darkcyan;
    color: white;
}
</style>