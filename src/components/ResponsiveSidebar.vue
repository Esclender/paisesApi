<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid ">
        <button class="navbar-toggler shadow-none d-lg-block" type="button" @click="toggleSidebar" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>

    <div class="row">

      <div class="offcanvas offcanvas-start" :class="{ 'show': isSidebarOpen }" tabindex="-1" id="sidebar"
        aria-labelledby="sidebarLabel">
        <div class="offcanvas-header">
          <i class="fas fa-globe"></i> <!-- Example icon, replace with your own -->
          <button type="button" class="btn-close text-reset" @click="toggleSidebar" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group">
            <li class="btn  btn-primary ">
              <RouterLink class="d-block" @click="hideSidebar" to="/"><i class="fas fa-globe"></i> Paises</RouterLink>
            </li>
            <li class="btn btn-primary ">
              <RouterLink class="d-block" @click="hideSidebar" to="/vistaone"><i class="fas fa-eye"></i> Vista 1
              </RouterLink>
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
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    hideSidebar() {
      this.isSidebarOpen = false;
    }
  }
},);
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  padding: 1rem;

}

li {
  padding: 8px;
  margin-bottom: 15px;
}


a {
  color: #f8f9fa;
  font-weight: bold;
  text-decoration: none;
}

.offcanvas-header>.fas {
  font-size: 60px;
  background: linear-gradient(to right, #007BFF, #28A745);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
