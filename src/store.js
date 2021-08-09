import { createStore } from "vuex";
import { trainings } from "./data.json";

export const store = createStore({
  state() {
    return {
      currentTraining: null,
      currentExo: null,
      restingTime: 0,
      backDisabled: false,
      // TODO: remove when we change the json
      trainingList: [
        {
          id: "push",
          name: "push",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/286e81cd-dcb6-43f2-98e4-0e0cb4316d60/man-training-gym_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143037Z&X-Amz-Expires=86400&X-Amz-Signature=d376252a949e67970937bf515f9e8946bc8632c441f1cb9bb8cd48a46379c20e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22man-training-gym_1.svg%22",
        },
        {
          id: "pull",
          name: "pull",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eeef675e-fabd-43d7-8533-5f951fe5833b/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143049Z&X-Amz-Expires=86400&X-Amz-Signature=f626d11920518748f7db6b59f45b7df05b8702bb2a1c2bfdec0f25ac0d711fff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.svg%22",
        },
        {
          id: "legs",
          name: "legs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f2553d03-ce12-47b6-a8a4-8deecf0c3785/bodybuilding-concept-with-side-view-of-man-and-barbell_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143029Z&X-Amz-Expires=86400&X-Amz-Signature=55d5398cf289197b17654270e1345af512079997676b259812cc6a0f5048e2f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bodybuilding-concept-with-side-view-of-man-and-barbell_1.svg%22",
        },
        {
          id: "abs",
          name: "abs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a22ca190-06d9-476f-90f5-cda82bb4b092/pexels-li-sun-2294363_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143015Z&X-Amz-Expires=86400&X-Amz-Signature=71ba9bbef4bc0335f07457bf56b227ce5d6fb594cef1821bb46026319ce03648&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-li-sun-2294363_1.svg%22",
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
  },
});
