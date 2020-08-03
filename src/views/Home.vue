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
        <div class="col-12 my-3">
          <H1 class="text-center">EDUCATION:</H1>
        </div>
        <!-- Codeworks -->
        <div class="card col-12 col-md-5 col-lg-3 my-3 shadow border border-secondary">
          <img src="@/assets/img/BCW.jpg" class="card-img-top p-3" />
          <div class="card-body pt-0">
            <h3 class="card-title">500+ Hours Coding</h3>
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
        <div
          class="card col-12 col-md-5 col-lg-3 my-3 shadow border border-secondary"
          style="background-color:#bee8f8"
        >
          <img src class="card-img-top" alt />
          <div class="card-body">
            <h4 class="card-title">Continuing Education</h4>
            <p class="card-text text-left">
              <b>Micron Technology, Inc.</b>
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Project Management</i>
                <br />
                <i class="fas fa-long-arrow-alt-right">&nbsp; Data Analysis</i>
                <br />
                <i class="fas fa-long-arrow-alt-right">&nbsp; Problem Solving</i>
              </small>
            </p>
            <p class="card-text text-left">
              <b>Boise State University</b>
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Electrical & Computer Engineering</i>
                <br />
                <i class="fas fa-long-arrow-alt-right">&nbsp;Computer Science</i>
              </small>
            </p>
            <p class="card-text text-left">
              <b>College of Southern Idaho</b>
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;Upper Division Mathematics</i>
              </small>
            </p>
            <p class="card-text text-left">
              <b>Flathead Valley Community College</b>
              <br />
              <small>
                <i class="fas fa-long-arrow-alt-right">&nbsp;General Education</i>
              </small>
            </p>
            <!-- <a href="#" class="btn btn-outline-primary">Go somewhere</a> -->
          </div>
        </div>

        <!-- Devry Phoenix -->
        <div class="card col-12 col-md-5 col-lg-3 my-3 shadow border border-warning bg-secondary">
          <img src="@/assets/img/devry-logo.svg" class="card-img-top p-3" alt />
          <div class="card-body pt-0">
            <h5 class="card-title" style="color:black;">Electronics</h5>
            <p class="card-text" style="color:black;">Associate of Applied Science</p>
            <a
              href="https://www.devry.edu/about/campus-locations/arizona/phoenix.html"
              target="_blank"
              class="btn btn-outline-warning"
            >DeVry Phoenix</a>
          </div>
        </div>
      </div>
    </div>

    <!-- PROJECTS -->
    <!-- <div class="container-fluid"> -->
    <div class="row">
      <div class="col-12" style="background-color:#8888;">
        <H1 class="text-center py-3 text-shadow-light">Coding Projects:</H1>
      </div>
      <!-- Keepr -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/keepr.png"
            class="card-img"
            alt="keepr.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Keepr</h3>
            <p class="card-text text-shadow">
              <small>Vue.js | C# | MySQL</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/CS-final-keepr"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a class="ao" href="https://keepr252.herokuapp.com/#/" target="_blank">
                <h3>HEROKU</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Volunteer #8 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/volunteer.png"
            class="card-img"
            alt="volunteer.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Volunteer</h3>
            <p class="card-text text-shadow">
              <small>Vue.js | Node.js | MongoDB</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/capstone-volunteer"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a class="ao" href="https://capstone-volunteer.herokuapp.com" target="_blank">
                <h3>HEROKU</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- BugLog #8 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/buglog.png"
            class="card-img"
            alt="buglog.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">BugLog</h3>
            <p class="card-text text-shadow">
              <small>Vue.js | Node.js | MongoDB</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/checkpoint-buglog"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a class="ao" href="https://checkpoint-buglog.herokuapp.com" target="_blank">
                <h3>HEROKU</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Kanban #7 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/kanban.png"
            class="card-img"
            alt="kanban.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Kanban</h3>
            <p class="card-text text-shadow">
              <small>Vue.js | Node.js | MongoDB</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/checkpoint-kanban"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a class="ao" href="https://checkpoint-kanban.herokuapp.com" target="_blank">
                <h3>HEROKU</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Bloggr #6 -->
      <div
        class="col-12 col-md-6 col-lg-3 valign p-1 bg-happy"
        style="height:150px;background-color:#8888;"
      >
        <div class="card bg-dark text-white">
          <!-- <img
            src="../assets/img/bloggr.png"
            class="card-img"
            alt="bloggr.png"
            style="opacity:40%;height:145px;"
          />-->
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Bloggr</h3>
            <p class="card-text text-shadow">
              <small>VUE | JS | Node.js | MongoDB</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/bloggr-checkpoint"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a
                class="ao"
                href="https://justinmattson.github.io/bloggr-checkpoint"
                target="_blank"
              >
                <h3>GITHUB</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Hackathon #5 -->
      <div
        class="col-12 col-md-6 col-lg-3 valign p-1 bg-happy"
        style="height:150px;background-color:#8888;"
      >
        <div class="card bg-dark text-white">
          <!-- <img
            src="../assets/img/hackathon.png"
            class="card-img"
            alt="hackathon.png"
            style="opacity:40%;height:145px;"
          />-->
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Scene It!</h3>
            <p class="card-text text-shadow">
              <small>JS | Node.js | MongoDB</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/hackathon-1"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <!-- <a class="ao" href="https://justinmattson.github.io/hackathon-1" target="_blank">
                <h3>GITHUB</h3>
              </a>-->
              <h4>Group Project</h4>
            </span>
          </div>
        </div>
      </div>
      <!-- Inspire #4 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/inspire.png"
            class="card-img"
            alt="inspire.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Inspire</h3>
            <p class="card-text text-shadow">
              <small>JS 81.9% | HTML 14.5% | CSS 3.6%</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/CheckPoint3-inspire"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a
                class="ao"
                href="https://justinmattson.github.io/CheckPoint3-inspire"
                target="_blank"
              >
                <h3>GITHUB</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Task Master #3 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/taskmaster.png"
            class="card-img"
            alt="taskmaster.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Task Master</h3>
            <p class="card-text text-shadow">
              <small>JS | HTML | CSS</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/CheckPoint3-TaskMaster"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a
                class="ao"
                href="https://justinmattson.github.io/CheckPoint3-TaskMaster"
                target="_blank"
              >
                <h3>GITHUB</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- Idle Clicker #2 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/lollipop.png"
            class="card-img"
            alt="lollipop.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">The Lollipop Shop</h3>
            <p class="card-text text-shadow">
              <small>JS | HTML | CSS</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/CheckPoint2"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a class="ao" href="https://justinmattson.github.io/CheckPoint2" target="_blank">
                <h3>GITHUB</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
      <!-- SiteClone #1 -->
      <div class="col-12 col-md-6 col-lg-3 valign p-1" style="height:150px;background-color:#8888;">
        <div class="card bg-dark text-white">
          <img
            src="../assets/img/siteclone.png"
            class="card-img"
            alt="siteclone.png"
            style="opacity:40%;height:145px;"
          />
          <div class="card-img-overlay">
            <h3 class="card-title text-shadow">Site Clone</h3>
            <p class="card-text text-shadow">
              <small>HTML | CSS | JS</small>
            </p>
            <span class="d-flex justify-content-between">
              <a
                class="ao"
                href="https://github.com/JustinMattson/week-1-checkpoint"
                style="text-decoration:none;"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a
                class="ao"
                href="https://justinmattson.github.io/week-1-checkpoint/"
                target="_blank"
              >
                <h3>GITHUB</h3>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 valign bg-primary" style="height:150px;">BugLog</div>
      <div
        class="col-12 col-md-6 col-lg-3 valign text-light text-shadow-dark"
        style="height:150px;"
      ></div>

      <div class="col-12 col-md-6 col-lg-3 valign bg-info bg-happy" style="height:150px;">6</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-primary" style="height:150px;">7</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-secondary" style="height:150px;">8</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-happy" style="height:150px;">9</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-primary" style="height:150px;">10</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-secondary" style="height:150px;">11</div>
      <div class="col-12 col-md-6 col-lg-3 valign bg-info" style="height:150px;">12</div>
    </div>
    <!-- </div> -->

    <!-- Footer -->
    <div class style="height:50px;"></div>
    <div class="col-12 text-center fixed-bottom p-0" style="background-color:#fffd">
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
.bg-happy {
  background: url("../assets/img/IMAG0996_wild_sunflowers.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
}

a.ao {
  text-decoration: none;
  color: white;
  text-shadow: 1px 1px 5px black;
}
.text-shadow {
  text-shadow: 1px 1px black;
}
/* .valign {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
