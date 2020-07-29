<template>
  <div id="app" class="bg-cstm" style="min-height:100vh">
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-cstm {
  background: url("https://lh3.googleusercontent.com/zbjYzNbE_tllqSmAEvTYqkaiw4pn-x-PtL3Vlbgau6CQZjT968PXlpi9Fz3FXJYcQorbLezGEJZjIZ8gFWkYFAeSGPDewMK4ma9YsrvaCDi8sx8Mei6gVK3EOrG-74x8BZfRUHJha2nE5E-ufTlpDzuQckBKLl--MNE12cGlN4n25LUkORGrmLZICFalkDFPQgx1Xwmlh3VMmi66ci-dJVQUGY7x58B3vHtr-8Sc3MTqG_Cm-77khc7NnA6QIqkcqrGrmZ1JmGHH1Rx22LfbM0wa8ytK08vB1isTMlBYdCeZXj_UA6l1iL3LiOrdRYWI5MJ9Dx-q3YHc4QHmDxoGMpVKBDdrsszOncwVcMjo2wDoYewHVSlc6Z8cZTI_OD08iHX-pNSOcbS7B7Fs8KHrWIhcgj9ZUcVhKlCA5EiQm5FILnj-Q2TNyBSOxQyNBs43wmkHrzMm2_O7xeyH9DhBS1lnisi9VeDLdQK2nvR1fRoauG6tBGWnGbmqgNPrLHnGxPQto4GvV9dEnMAxmNnNFQcz3tcPqHqEte2lz2eOAoF5biCmeJTJGsko-XvcAHdkBtOxyucyBwtjcAi2j3j-BnYnimoG38J24OaO3Re18CVZk6sk23ngloUVuMWQ44Jm7zSv9FzhEuej6fa0b--JsBzdgYkl-2JF-4LJ2mKpNkx9IGzZh7jntOBsmGf-WA=w2067-h1164-no?authuser=0")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
}
</style>
