<template>
  <div>
    <h2>
      {{
        backDisabled
          ? currentExo.disabledName || currentExo.name
          : currentExo.name
      }}
    </h2>
    <div>Set {{ currentExo.currentSet }} of {{ currentExo.sets }}</div>
    <div>{{ currentExo.reps }} reps</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentExo = computed(() => store.state.currentExo);
const backDisabled = computed(() => store.state.backDisabled);
</script>

<style lang="scss" scoped></style>
