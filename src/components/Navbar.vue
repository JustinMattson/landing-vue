<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">
      <router-link to="/">Justin Mattson</router-link>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!-- <a class="nav-link" href="#">
            <router-link to="/vue">Vue</router-link>
          </a>-->

          <span class="sr-only">(current)</span>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link text-muted" href="#">Link</a>
        </li>-->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >More Info</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <a class="dropdown-item text-muted" href="#">Action</a>
            <a class="dropdown-item text-muted" href="#">Another action</a>-->
            <a class="dropdown-item" href="#">
              <router-link to="/vue">Vue</router-link>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <router-link to="/about">About Me</router-link>
            </a>
          </div>
        </li>
        <!-- <li class="nav-item">
          <a
            class="nav-link disabled text-muted"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >Disabled</a>
        </li>-->
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>-->
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
