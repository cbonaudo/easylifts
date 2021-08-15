<template>
  <div>
    <h2>
      {{
        backDisabled
          ? currentExo.disabledName || currentExo.name
          : currentExo.name
      }}
    </h2>
    <div>Set {{ currentSet }} of {{ currentExo.sets }}</div>
    <div>{{ currentExo.reps }} reps</div>
    <div>last: {{ lastWeight }} kg</div>
    <input @change="saveCurrentWeight" placeholder="current weight score" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentSet = computed(() => store.state.currentSet);
const currentExo = computed(() => store.state.currentExo);
const backDisabled = computed(() => store.state.backDisabled);

const lastWeight = computed(() => store.getters.getLastWeight);
const saveCurrentWeight = (e) =>
  store.dispatch("saveCurrentWeight", e.target.value);
</script>

<style lang="scss" scoped></style>
