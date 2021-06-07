<template>
  <h1>Training Selection</h1>
  <div class="exercises">
    <button
      v-for="exercise in exercises"
      :key="exercise"
      class="exercise"
      @click="() => setExercise(exercise)"
    >
      {{ exercise }}
    </button>
  </div>
  <div class="back-container">
    <input
      type="checkbox"
      id="backDisabled"
      @change="toggleBackDisabled"
      :checked="backDisabled"
    /><label for="backDisabled">My back hurts</label>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

const exercises = computed(() => store.getters.exerciseList);
const setExercise = (exercise) => store.commit("setExercise", exercise);

const backDisabled = computed(() => store.state.backDisabled);
const toggleBackDisabled = () => store.commit("toggleBackDisabled");
</script>

<style lang="scss" scoped>
.exercises {
  display: flex;
  justify-content: space-around;
}
.back-container {
  margin-top: 15px;
}
</style>
