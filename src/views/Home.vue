<template>
  <div class="home container-fluid bg-image" style="height:100vh">
    <div class="row">
      <div class="col-12 p-0 cursive" style="height:100vh;">
        <div class style="height:75px;"></div>
        <H1>Hi, Hey, Hello!</H1>

        <p>Welcome to my blank slate...</p>
        <B>
          <p>The best thing about starting a Vue project from scratch, is I can let my imagination run free!</p>
        </B>
      </div>
      <div class="col-12" style="background-color:#44444453;height:600px;">Column 2</div>
      <div class="col-12" style="background-color:#ffffff53;height:600px;">Column3</div>
    </div>
    <!-- Footer -->
    <div class="col-12 text-center fixed-bottom" style="background-color:#FFFFFFdd">
      <div style="font-weight:700;">
        Made with
        <img src="@/assets/logo.png" style="height: 1em" />
        by Justin Mattson
        <br />
        <a href="https://www.facebook.com/justin.mattson.9" target="_blank">
          <i class="fa fa-facebook-official text-dark-vue" aria-hidden="true"></i>
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/justin-mattson" target="_blank">
          <i class="fa fa-linkedin-square text-dark-vue" aria-hidden="true"></i>
        </a>&nbsp;
        <a href="https://justinmattson.github.io/" target="_blank">
          <i class="fa fa-github text-dark-vue p-1" aria-hidden="true"></i>
        </a>&nbsp;
        <a href="mailto:justin.mattson@outlook.com" class="text-dark">
          <i class="fa fa-envelope-o text-dark-vue" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap");
.cursive {
  font-family: "Dancing Script", cursive;
  font-size: 20pt;
}
.bg-image {
  background: url("../assets/img/bwma.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
}
</style>
