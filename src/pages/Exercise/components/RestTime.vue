<template>
  <div>Rest: {{ restingTime }} s</div>
  <div class="loading-bar">
    <div class="loading-bar__fill" :style="`width: ${barWidth}%`"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const restingTime = computed(() => store.state.restingTime);

const barWidth = computed(() => {
  let currentRestTime = 0;
  if (store.state.currentSet === 1) {
    currentRestTime = store.state.currentTraining.rest_between_exercices;
  } else {
    currentRestTime = store.state.currentTraining.rest_between_sets;
  }
  return 100 - (store.state.restingTime / currentRestTime) * 100;
});
</script>

<style lang="scss" scoped>
.loading-bar {
  border: 1px solid #ccc !important;

  &__fill {
    height: 30px;
    background-color: #40eec8;
  }
}
</style>
