<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Inicio da Navbar -->
    <div class="hero-head is-flex is-align-items-center mx-4 mb-2">
      <div class="tile is-parent is-2">
        <img src="../assets/Logo_analytics.png" alt="Logo da Analytics" />
      </div>
      <div class="tile is-parent is-10 is-flex is-justify-content-space-between">
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
    <!-- Fim da Navbar -->

    <!-- Fim da Faixa -->
    <section class="mx-4">
      <div class="tile is-parent">
        <div class="tile is-child is-2"></div>
        <div class=" tile is-child is-10 is-flex is-justify-content-space-between">
          <h1 class="has-text-grey-light is-size-3 has-text-weight-bold"> Cadastrar novo usuário</h1>
          <b-button type="is-success"> <router-link class="has-text-white" to="/"> Salvar</router-link> </b-button>
        </div>
      </div>
    </section>
    <!-- Fim da Faixa -->

    <!-- Inicio SideBar e Cadastro -->

    <div class="tile mx-4 mb-2">
      <div class="tile  mb-2 is-parent is-2">
        <article class="tile is-child">
          <div class="content is-flex is-flex-direction-column">
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Dash.png" alt="">
              <span class="m-3 ml-4 has-text-grey-light">Dashboard</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Group.png" alt="">
              <span class="m-2 has-text-grey-light">Grupos</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/User.png" alt="">
              <span class="m-3 ml-5 has-text-grey-light">Usuários</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/System.png" alt="">
              <span class="m-3 ml-5 has-text-grey-light">Sistema</span>
            </div>
            <div class=" is-flex is-align-items-center">
              <img src="../assets/sidemenu/Categorie.png" alt="">
              <span class="m-3 ml-5 has-text-grey-light">Categorias</span>
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-10 p-0">
        <article class="tile is-child">
          <div class="content is-flex is-flex-direction-column">
            <div class="p-4 ml-3 has-background-dark">
              <Header class="is-flex is-justify-content-space-between">
                <div class="is-flex is-align-items-center">
                  <img class="m-2" src="../assets/Filter.png" alt="">
                  <span class="has-text-grey-light"> Filtros </span>
                  <img class="m-3" src="../assets/Line.png" alt="">
                  <span class="has-text-grey-light"> ordenar por </span>
                </div>
                <div class="buttons has-addons">
                  <button class="button is-black is-selected">Yes</button>
                  <button class="button is-black has-background-black-bis">Maybe</button>
                  <button class="button is-black has-background-black-bis">No</button>
                </div>
              </Header>
              
              <main>
                <div class="is-flex is-align-items-center">
                <p class="has-text-grey-light">Usuários</p>
                <hr class="hr has-background-grey">
                </div>
              </main>
            </div>
          </div>
        </article>
      </div>

    </div>
    <!-- Fim SideBar e Container Usuários -->
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    
  }
}
</script>

<style>
.text-input {
  width: 30.625rem;
  height: 2.5rem;
}
.hr{
   flex: 1;
   margin-left: 10px;
   margin-top: 12px;
   height: 1px;
   border: none;
}
</style>