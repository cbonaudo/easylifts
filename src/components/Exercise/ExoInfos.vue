<template>
  <div>
    <div>
      {{
        backDisabled
          ? currentExo.disabledName || currentExo.name
          : currentExo.name
      }}
    </div>
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
