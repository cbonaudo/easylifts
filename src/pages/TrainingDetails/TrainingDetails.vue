<template>
  <h1>Training Details</h1>
  <h2>{{ route.params.id }}</h2>

  <div class="exercises">
    <div
      v-for="exercise in training.exercises"
      :key="exercise.id"
      class="exercise"
    >
      <h3>{{ exercise.name }}</h3>
      <p v-if="exercise.disabledName">
        {{ "Disabled alternative: " + exercise.disabledName }}
      </p>
      <p>{{ "Nb of sets: " + exercise.sets }}</p>
      <p>{{ "reps: " + exercise.reps }}</p>
      <p></p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

store.dispatch("getTrainingById", route.params.id);

const training = computed(() => store.state.currentTraining);
</script>

<style lang="scss" scoped>
.exercises {
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
}
.exercise {
  background-color: lightgray;
  color: black;
  border: 1px white solid;
  margin: 5px;
  padding: 0px 15px;
}
</style>
