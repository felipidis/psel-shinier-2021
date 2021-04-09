<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Inicio da Navbar -->
    <navbar/>
    <!-- Fim da Navbar -->
    
    <!-- Fim da Faixa -->
    <section class="mx-4">
      <div class="tile is-parent">
        <div class="tile is-child is-2"></div>
        <div class=" tile is-child is-10 is-flex is-justify-content-space-between is-align-items-center">
          <h1 class="has-text-grey-light is-size-3 has-text-weight-bold"> Usuários com acesso a plataforma</h1>
          <b-button type="is-success"> <router-link class="has-text-white" to="/cadastro"> Novos Usuários</router-link> </b-button>
        </div>
      </div>
    </section>
    <!-- Fim da Faixa -->
    
    <!-- Inicio SideBar e Container Usuários -->

    <div class="tile mx-4 mb-2">
      <sidebar/>

      <div class="tile is-parent is-10 p-0 mb-2">
        <article class="tile is-child has-background-dark">
          <div class="content is-flex is-flex-direction-column">
            <div class="p-2 ml-3 ">
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
                <p class="p-2 has-text-grey-light">Usuários</p>
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
import Navbar from '@/components/Navbar'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'User',
  props: {
    
  },
  components:{
    Navbar,
    Sidebar
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
.box{
  width: 2.5rem;
  height: 2.5rem;
}
</style>