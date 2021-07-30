<template>
  <h1>Training</h1>
  <p>------</p>

  <RestTime v-if="isResting" class="rest-time" />
  <button @click="skipRest" v-if="isResting">Skip rest</button>

  <div v-if="isResting">Up next :</div>
  <Exo-Infos v-if="currentExo" class="exo-infos" />

  <button @click="endSet" v-if="!isResting" class="done-btn">Done</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import RestTime from "./components/RestTime.vue";
import ExoInfos from "./components/ExoInfos.vue";

const store = useStore();
const router = useRouter();

const endSet = () => {
  if (store.state.currentExo === null) {
    router.push({ name: "training-selection" });
  } else {
    store.commit("endSet");
  }
};

const skipRest = () => store.commit("skipRest");
const isResting = computed(() => store.getters.isResting);
const currentExo = computed(() => store.state.currentExo);
</script>

<style lang="scss" scoped>
.exo-infos {
  margin-top: 10px;
}
.done-btn {
  margin-top: 30px;
  font-size: 1.5rem;
  width: 160px;
  height: 60px;
}
</style>
