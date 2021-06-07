<template>
  <Exercise v-if="isTrainingSelected" />
  <TrainingSelection v-else />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Exercise from "./components/Exercise/Exercise.vue";
import TrainingSelection from "./components/TrainingSelection/TrainingSelection.vue";

const store = useStore();
const isTrainingSelected = computed(() => store.getters.isTrainingSelected);

store.commit("runTimeLoop");
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  background-color: rgb(129, 146, 146);
  color: white;
}

#app {
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 350px;
  margin: auto;
}

button {
  background-color: white;
  text-transform: uppercase;
  border: 1px black solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  &:hover {
    background-color: rgb(116, 116, 116);
    color: white;
  }
}
</style>
