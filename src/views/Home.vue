<template>
  <div class="home container-fluid bg-image" style="height:100vh">
    <div class="row">
      <div class="col-12 p-0 cursive" style="height:100vh;">
        <div class style="height:75px;"></div>
        <H1>Hi, Hey, Hello!</H1>

        <p>Welcome to my blank slate...</p>
        <B>
          <p>
            The best thing about starting a Vue project from scratch is...
            <br />I can let my imagination run free!
          </p>
        </B>
      </div>
    </div>

    <!-- EDUCATION -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-around">
        <!-- Codeworks -->
        <div
          class="card col-12 col-md-6 col-lg-3 my-3 shadow border border-secondary"
          style="width: 18rem;"
        >
          <img src="@/assets/img/BCW.jpg" class="card-img-top p-3" />
          <div class="card-body">
            <h5 class="card-title">500+ Hours Coding</h5>
            <ul class="card-text text-left">
              <li>HTML5 & CSS3</li>
              <li>JavaScript ES6</li>
              <li>Web API / HTTP</li>
              <li>JS Frameworks</li>
              <li>Nodejs</li>
              <li>DotNet Core C#</li>
              <li>SQL</li>
              <li>MongoDb</li>
              <li>Agile / Scrum</li>
            </ul>
            <a
              href="https://boisecodeworks.com/"
              target="_blank"
              class="btn btn-outline-primary"
            >Codeworks</a>
          </div>
        </div>

        <!-- Continuing Education -->
        <div class="card col-12 col-md-6 col-lg-3 my-3 bg-warning shadow">
          <img src class="card-img-top" alt />
          <div class="card-body">
            <h5 class="card-title">Continuing Education</h5>
            <p class="card-text text-left">
              Micron Technology, Inc.
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Project Management</i>
                <i class="fas fa-long-arrow-alt-right">&nbsp; Data Analysis</i>
                <i class="fas fa-long-arrow-alt-right">&nbsp; Problem Solving</i>
              </small>
            </p>
            <p class="card-text text-left">
              Boise State University
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Electrical Engineering</i>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Computer Science</i>
              </small>
            </p>
            <p class="card-text text-left">
              College of Southern Idaho
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Upper Division Mathematics</i>
              </small>
            </p>
            <p class="card-text text-left">
              Flathead Valley Community College
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;General Education</i>
              </small>
            </p>
            <!-- <a href="#" class="btn btn-outline-primary">Go somewhere</a> -->
          </div>
        </div>

        <!-- Devry Phoenix -->
        <div class="card col-12 col-md-6 col-lg-3 my-3 shadow bg-secondary">
          <img src="@/assets/img/devry-logo.svg" class="card-img-top p-3" alt />
          <div class="card-body">
            <h5 class="card-title">Electronics</h5>
            <p class="card-text">Associate of Applied Science</p>
            <a
              href="https://www.devry.edu/about/campus-locations/arizona/phoenix.html"
              target="_blank"
              class="btn btn-outline-warning"
            >DeVry Phoenix</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12" style="background-color:#ffffff53;height:600px;">Column3</div>
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
