<template>
  <div class="hero has-background-black is-fullheight">
    <div class="hero-head is-flex is-align-items-center mt-3 ml-3">
      <img src="../assets/Logo_analytics.png" alt="Logo da Analytics" />
      <div class="container is-flex is-justify-content-space-between">
        <b-field>
          <b-input
            placeholder="Buscar Funcionalidades"
            type="search"
            icon="magnify"
            class="text-input"
          >
          </b-input>
        </b-field>

        <p class="has-text-white mr-6 mt-2">Super Admin</p>
      </div>
    </div>

    <div class="tile mx-5 mb-2 mt-6">
      <div class="tile is-parent is-2 ">
        <article class="tile is-child">
          <div class="content is-flex is-flex-direction-column">
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Dash.png" alt="">
              <span class="m-3 ml-4 has-text-white">Dashboard</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Group.png" alt="">
              <span class="m-2 has-text-white">Grupos</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/User.png" alt="">
              <span class="m-3 ml-5 has-text-white">Usuários</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/System.png" alt="">
              <span class="m-3 ml-5 has-text-white">Sistema</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Categorie.png" alt="">
              <span class="m-3 ml-5 has-text-white">Categorias</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hero',
  props: {
    
  }
}
</script>

<style>
.text-input {
  width: 30.625rem;
  height: 2.5rem;
}
</style>