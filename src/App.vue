<template>
  <router-link to="/training-selection">Selection</router-link>
  <router-view></router-view>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

store.commit("runTimeLoop");
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  background-color: rgb(129, 146, 146);
  color: white;
}

#app {
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 350px;
  margin: auto;
}

button {
  background-color: white;
  text-transform: uppercase;
  border: 1px black solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  &:hover {
    background-color: rgb(116, 116, 116);
    color: white;
  }
}
</style>
