import { createStore } from "vuex";
import { trainings } from "./data.json";

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
      if (state.currentExo === null) return;

      if (state.currentExo.currentSet < state.currentExo.sets) {
        state.currentExo.currentSet++;
      } else {
        const nextExercise = trainings[state.currentTraining].find(
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
    setTraining(state, training) {
      state.restingTime = 0;
      state.currentTraining = training;
      state.currentExo = trainings[training][0];
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
    trainingList(state) {
      return Object.keys(trainings);
    },
  },
});
