<template>
  <div class="about container-fluid bg-image container-fluid">
    <div class="row">
      <div class="col-12" style="background-color:#ffffff53;">
        <!-- Because the top of the display slides under the fixed Navbar -->
        <div class style="height:75px;"></div>

        <h1 class="text-light text-shadow-dark">More about Justin Mattson</h1>

        <!-- Fun little personality profile -->
        <div class="row d-flex justify-content-center mb-3">
          <div class="col-md-6 bg-light rounded-lg m-0" style="height:75px;width:100%;">
            <h2>
              <a href="https://www.emergenetics.com/">
                <img
                  class="p-2"
                  :src="require('@/assets/img/emergenetics_logo.png')"
                  style="height:75px;"
                />
              </a>
              <a
                class="text-dark text-shadow-light"
                style="text-decoration:none;height:75px;"
                href="https://drive.google.com/file/d/1wr6A3HvVw2nHFLzWRMOftcsuuIi1bPSK/view?usp=sharing"
              >&nbsp; | My Profile</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
a {
  color: #800080;
}
.bg-image {
  background: url("../assets/img/RRcanyon.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>