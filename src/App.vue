<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">menu</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-link to="/list">리스트페이지</router-link>
  <router-view :blogList="blogList"></router-view>

  <!-- <List :blogList="blogList" /> -->
</template>

<script>
// import List from "./components/List.vue";
import blog from "./assets/blog";

export default {
  name: "App",
  data() {
    return {
      blogList: blog,
    };
  },
  components: {},
};
</script>

<style>
.mt-4 {
  position: relative;
}
</style>
