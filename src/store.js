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
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fcdd0f8e-6246-4fe3-9794-9092205167ad/man-training-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T053514Z&X-Amz-Expires=86400&X-Amz-Signature=0ca7557b9c4c7a9c3ddec9cfd05654ec168ac349bf34e6716f7a963b1914a6b3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22man-training-gym_1.png%22",
        },
        {
          id: "pull",
          name: "pull",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c1c7f8c-e4ce-4db8-a4a1-d0a8b36333df/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T053512Z&X-Amz-Expires=86400&X-Amz-Signature=69343c9585feb3a0e2992806605c0aba613e698d10ea66ec785fc4041165b637&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png%22",
        },
        {
          id: "legs",
          name: "legs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1407cd54-bf0f-480b-8d65-312d675954b6/bodybuilding-concept-with-side-view-of-man-and-barbell_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T052925Z&X-Amz-Expires=86400&X-Amz-Signature=fea5c646e7c7fd87a9dd77cc6399b0d71d0b46194ac3c3a9dbbbe78b2d55fb8b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bodybuilding-concept-with-side-view-of-man-and-barbell_1.png%22",
        },
        {
          id: "abs",
          name: "abs",
          pictureUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7a6e02b-cfb0-4c0d-950d-1aded8d0ddf0/pexels-li-sun-2294363_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T053516Z&X-Amz-Expires=86400&X-Amz-Signature=9fa62766220e372811bb43a104e8dbd1f58f8d1e2ad94209c7ba7f2bff3c17e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-li-sun-2294363_1.png%22",
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
    isResting(state) {
      return state.restingTime > 0;
    },
    isTrainingSelected(state) {
      return !!state.currentTraining;
    },
  },
});
