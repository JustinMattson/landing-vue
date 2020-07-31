<template>
  <div class="vue bg-color" style="min-height:100vh;">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to my Vue.js Landing Page" />...in case you ever wanted to know more about Vue!
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "vue",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.bg-color {
  background-color: rgba(184, 135, 11, 0.541);
}
</style>
