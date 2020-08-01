<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #35495e;
}

#nav a.router-link-exact-active {
  color: #41b883;
}
.text-light-vue {
  color: #41b883;
}
.text-dark-vue {
  color: #35495e;
}
.text-shadow-light {
  text-shadow: 1px 1px 5px #41b883;
}
.text-shadow-dark {
  text-shadow: 1px 1px 5px #35495d;
}
</style>
