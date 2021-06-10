<template>
  <h1>Training Selection</h1>
  <div class="trainings">
    <div v-for="training in trainingList" :key="training" class="training">
      <button @click="() => setTraining(training)">
        {{ training }}
      </button>
      <router-link :to="{ name: 'training-details', params: { id: training } }"
        >Details</router-link
      >
    </div>
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

const store = useStore();
const router = useRouter();

const trainingList = computed(() => store.getters.trainingList);
const setTraining = (training) => {
  store.commit("setTraining", training);
  router.push({
    name: "exercise",
  });
};

const backDisabled = computed(() => store.state.backDisabled);
const toggleBackDisabled = () => store.commit("toggleBackDisabled");
</script>

<style lang="scss" scoped>
.trainings {
  display: flex;
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
