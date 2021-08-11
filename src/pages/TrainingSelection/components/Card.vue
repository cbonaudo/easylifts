<template>
  <div
    class="card"
    :style="{
      background: 'center / cover no-repeat url(' + training.pictureUrl + ')',
    }"
  >
    <div class="name" @click="goToTraining">
      {{ training.name }}
    </div>

    <div class="details" @click="goToDetails">details</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  props: {
    training: {
      type: Object,
      required: true,
      validator: function (training) {
        return training.name && training.id && training.pictureUrl;
      },
    },
  },

  methods: {
    ...mapMutations(["setTraining"]),
    ...mapActions(["getTrainingById"]),

    goToTraining() {
      this.$router.push({
        name: "exercise",
        params: { id: this.training.id },
      });
    },

    goToDetails() {
      this.$router.push({
        name: "training-details",
        params: { id: this.training.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 130px;
  width: 100vw;
}
.name {
  height: 100px;
  text-transform: uppercase;
  color: #d64933;
  font-size: 48px;
  font-weight: 700;
}
.details {
  height: 30px;
  background-color: #000000b3;
  text-transform: capitalize;
}
.details,
.name {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
