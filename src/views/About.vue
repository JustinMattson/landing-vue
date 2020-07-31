<template>
  <div class="about bg-image">
    <div class="row">
      <div class="col-12" style="background-color:#ffffffaa;">
        <h1 class="text-dark text-shadow">My name is Justin Mattson</h1>

        <!-- Fun little personality profile -->
        <h2>
          <a href="https://www.emergenetics.com/">
            <img :src="require('@/assets/img/emergenetics_logo.png')" />
          </a>
          <a
            class="text-shadow"
            style="text-decoration:none;"
            href="https://drive.google.com/file/d/1wr6A3HvVw2nHFLzWRMOftcsuuIi1bPSK/view?usp=sharing"
          >&nbsp; - My Profile</a>
        </h2>
      </div>
    </div>
  </div>
</template>



<style scoped>
a {
  color: #800080;
}
.bg-image {
  background: url("https://lh3.googleusercontent.com/uleohcN2CMJeEv719rVzyi82lfdD2SID8EMsPeEy05Ydd25ohgjUZRVYVUYwksX0HC4Zn_4GDwdheMdq42nrOLQjQUhtt6gl84Ib2MLs6z82-t7kvdZ76xe_LHfZrbn0FSOUDPlo48l0OaM9v2geF8P7KshzGGRgtZFw9hJVb2tb-ZWvGC0SEUm_y8MSVVDhRjx9kKjwrypqAxZQXtBYwUeIOAGW0OC7qQYK7LGtPcUtzQGPu3edHkP-M_2gfzqmxd8pZ98yCLM9WnqpDFw7YiXBeti6Dfdpz_CQpHj_FYXe9Ivsl9JdNo52uWoj8pnkDWD3XjSzjoosnK16enf_grEwEJLUcB8u8Q5ZzG7cd3H0x9vxRbCu4Hkz-P3UdL7xrVVuWmdmahlJqoGuROEo3flOg452KdoJW2Mnqyu-e2oiMcFMlrDziBco_2pBukr1fMTwLGP46HLfCVcpgewnVPsE98nrqn7THci8rT0Vo-KGZ04wY7WOLGmubv-m0KXA1XK0Er3SssTRtgn5HLeyCT_FvUvXqSy1XiWjzi1e46biW9Ax4nH0d5-VAPZEcO6l32WlaXcnlfIqHtW8XXJ4Vv3IGL-qRS3FG0uy4UdV5L8JEkOa6J1iwXZ2trFeDf_nBZH5oG2CPVjpVDRuyfqA7f758jLHCFhegqR2ApRyntS6vjp-1I6ZJD2a37InVA=w1707-h961-no?authuser=0")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  color: #ffffffaf;
}
.text-shadow {
  text-shadow: 1px 1px 5px white;
}
</style>