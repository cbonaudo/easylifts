<template>
  <h1>Training</h1>

  <RestTime v-if="isResting" class="rest-time" />
  <button @click="skipRest" v-if="isResting">Skip rest</button>

  <div v-if="isResting">Up next :</div>
  <Exo-Infos class="exo-infos" />
  <button @click="endSet" v-if="!isResting">Done</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import RestTime from "./RestTime.vue";
import ExoInfos from "./ExoInfos.vue";

const store = useStore();

const endSet = () => store.commit("endSet");
const skipRest = () => store.commit("skipRest");
const isResting = computed(() => store.getters.isResting);
</script>

<style lang="scss" scoped>
.exo-infos {
  margin-top: 10px;
}
</style>
