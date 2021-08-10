import { createStore } from "vuex";
import { trainings } from "./data.json";

export const store = createStore({
  state() {
    return {
      currentTraining: null,
      currentExo: null,
      restingTime: 0,
      backDisabled: false,
      trainings: trainings,
      // TODO: remove when we change the json
      trainingList: [
        {
          id: "push",
          name: "push",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fcdd0f8e-6246-4fe3-9794-9092205167ad/man-training-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165826Z&X-Amz-Expires=86400&X-Amz-Signature=52b10ac7d9e9db6cb81b7796fcae624172d10d48d4112a0da77386df7a651f71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22man-training-gym_1.png%22",
        },
        {
          id: "pull",
          name: "pull",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c1c7f8c-e4ce-4db8-a4a1-d0a8b36333df/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165826Z&X-Amz-Expires=86400&X-Amz-Signature=e19c62dc705d2b72d5e0cb5eee4b582384084d9ab0139ae6f8a16eecadb2c1f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png%22",
        },
        {
          id: "legs",
          name: "legs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1407cd54-bf0f-480b-8d65-312d675954b6/bodybuilding-concept-with-side-view-of-man-and-barbell_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165824Z&X-Amz-Expires=86400&X-Amz-Signature=0f2e11ef2b726bc62bbbe77a6c91baf07d061619e410080556087d0dab5c1626&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bodybuilding-concept-with-side-view-of-man-and-barbell_1.png%22",
        },
        {
          id: "abs",
          name: "abs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7a6e02b-cfb0-4c0d-950d-1aded8d0ddf0/pexels-li-sun-2294363_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165827Z&X-Amz-Expires=86400&X-Amz-Signature=cb9eff82418ad8458319ebdf055e618fad7c9321ff7140631381d6c247d82f2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-li-sun-2294363_1.png%22",
        },
      ],
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
    setTraining(state, trainingId) {
      const training = state.trainings.find(
        (training) => training.id === trainingId
      );

      state.restingTime = 0;
      state.currentTraining = training;
      state.currentExo = training.exercises[0];
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
  },
});
