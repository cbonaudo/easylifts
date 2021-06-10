import TrainingSelection from "../pages/TrainingSelection/TrainingSelection.vue";
import TrainingDetails from "../pages/TrainingDetails/TrainingDetails.vue";
import Exercise from "../pages/Exercise/Exercise.vue";

export const routes = [
  { path: "/", redirect: "/training-selection" },
  {
    path: "/training-details/:id",
    name: "training-details",
    component: TrainingDetails,
  },
  {
    path: "/training-selection",
    name: "training-selection",
    component: TrainingSelection,
  },
  { path: "/exercise", name: "exercise", component: Exercise },
];
