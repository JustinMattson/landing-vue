<template>
  <div class="vue container-fluid bg-color" style="min-height:100vh;">
    <div class="row">
      <div class="col-12">
        <div class style="height:60px;"></div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <DefaultVue msg="Welcome to my Vue.js Landing Page" />...in case you ever wanted to know more about Vue!
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultVue from "@/components/DefaultVue.vue";

export default {
  name: "vue",
  components: {
    DefaultVue,
  },
};
</script>

<style scoped>
.bg-color {
  background-color: rgba(184, 135, 11, 0.541);
}
</style>
