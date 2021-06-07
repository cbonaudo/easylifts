import { createStore } from "vuex";
import { exercises } from "./data.json";

export const store = createStore({
  state() {
    return {
      currentTraining: null,
      currentExo: null,
      restingTime: 0,
      backDisabled: false,
    };
  },
  mutations: {
    endSet(state) {
      if (state.currentExo.currentSet < state.currentExo.sets) {
        state.currentExo.currentSet++;
      } else {
        const nextExercise = exercises[state.currentTraining].find(
          (exo) => exo.id === state.currentExo.id + 1
        );
        if (nextExercise == undefined) {
          state.currentTraining = null;
          state.currentExo = null;
        } else {
          state.currentExo = nextExercise;
          state.currentExo.currentSet = 1;
        }
      }
      state.restingTime = 90;
    },
    skipRest(state) {
      state.restingTime = 0;
    },
    setExercise(state, exercise) {
      state.restingTime = 0;
      state.currentTraining = exercise;
      state.currentExo = exercises[exercise][0];
      state.currentExo.currentSet = 1;
    },
    toggleBackDisabled(state) {
      state.backDisabled = !state.backDisabled;
    },
    runTimeLoop(state) {
      setInterval(function () {
        state.restingTime -= 1;
      }, 1000);
    },
  },
  getters: {
    isResting(state) {
      return state.restingTime > 0;
    },
    isTrainingSelected(state) {
      return !!state.currentTraining;
    },
    exerciseList(state) {
      return Object.keys(exercises);
    },
  },
});