import { createStore } from "vuex";
import { trainings } from "./data.json";

import { abs, legs, pull, push } from "./assets";

export const store = createStore({
  state() {
    return {
      currentTraining: null,
      currentExo: null,
      restingTime: 0,
      backDisabled: false,
      trainings: trainings,
      currentSet: 1,
      // TODO: remove when we change the json
      trainingList: [
        {
          id: "push",
          name: "push",
          pictureUrl: push,
        },
        {
          id: "pull",
          name: "pull",
          pictureUrl: pull,
        },
        {
          id: "legs",
          name: "legs",
          pictureUrl: legs,
        },
        {
          id: "abs",
          name: "abs",
          pictureUrl: abs,
        },
      ],
    };
  },
  mutations: {
    endSet(state) {
      if (state.currentExo === null) return;

      if (state.currentSet < state.currentExo.sets) {
        state.restingTime = state.currentTraining.rest_between_sets;
        state.currentSet++;
      } else {
        const nextExercise = state.currentTraining.exercises.find(
          (exo) => exo.position === state.currentExo.position + 1
        );

        if (nextExercise == undefined) {
          state.currentTraining = null;
          state.currentExo = null;
        } else {
          state.currentExo = nextExercise;
          state.currentSet = 1;
          state.restingTime = state.currentTraining.rest_between_exercices;
        }
      }
    },
    skipRest(state) {
      state.restingTime = 0;
    },
    setTraining(state, training) {
      state.restingTime = 0;
      state.currentTraining = training;
      state.currentExo = training.exercises[0];
      state.currentSet = 1;
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
  actions: {
    getTrainingById({ state, commit }, trainingId) {
      // TODO: check if training is already loaded, if yes skip
      commit(
        "setTraining",
        state.trainings.find((training) => training.id === trainingId)
      );
    },
  },
  getters: {
    isNextExercise(state) {
      return;
    },
    isResting(state) {
      return state.restingTime > 0;
    },
    isTrainingSelected(state) {
      return !!state.currentTraining;
    },
  },
});
