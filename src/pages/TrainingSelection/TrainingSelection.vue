<template>
  <h1>Choose Your Training</h1>

  <div class="trainings">
    <Card
      v-for="training in trainingList"
      :key="training"
      :training="training"
    />
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
import { useRouter } from "vue-router";
import Card from "./components/Card.vue";

const store = useStore();
const router = useRouter();

const trainingList = computed(() => store.state.trainingList);

const backDisabled = computed(() => store.state.backDisabled);
const toggleBackDisabled = () => store.commit("toggleBackDisabled");
</script>

<style lang="scss" scoped>
.trainings {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.training {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.back-container {
  margin-top: 15px;
}
</style>
