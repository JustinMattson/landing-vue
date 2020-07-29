<template>
  <div class="vue">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to my Vue.js Landing Page" />
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
