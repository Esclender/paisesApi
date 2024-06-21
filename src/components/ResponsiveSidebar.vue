<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <button class="navbar-toggler shadow-none d-lg-block" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <div class="row">

      <div class="offcanvas offcanvas-start " tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
        <div class="offcanvas-header">
          <img src="/src/assets/worldLogo.svg" alt="Icono World">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group">
            <li class="btn text-right ">
              <RouterLink to="/">Paises</RouterLink>
            </li>
            <li class="btn text-right ">
              <RouterLink to="/vistaone">Vista 1</RouterLink>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResponsiveSidebar',
});
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f8f9fa;
  padding: 1rem;
}

li:active {
  border-color: #ffffff00 !important;
}

a {
  color: #f8f9fa;
  font: bold;
  text-decoration: none;
}

li {
  background-color: blue;

  margin-bottom: 15px;
}
</style>
