<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Inicio da Navbar -->
    <navbar/>
    <!-- Fim da Navbar -->
    
    <!-- Fim da Faixa -->
    <faixa-central mainText="Usuários com acesso a plataforma" :condition="true" buttonText="Novo Usuário" />
    <!-- Fim da Faixa -->
    
    <!-- Inicio SideBar e Container Usuários -->

    <div class="tile mx-4 mb-2">
      
      <sidebar/>

      <div class="tile is-parent is-10 p-2 mb-1">
        <article class="tile is-child has-background-dark box">
          <div class="content is-flex is-flex-direction-column">
            <div>
              <Header class="is-flex is-justify-content-space-between ">
                <div class="is-flex is-align-items-center is-flex-wrap-nowrap">
                  <img class="mx-2" src="../assets/Filter.png" alt="">
                  <span class="pt-2 has-text-grey-light"> Filtros </span>
                  <img class="mx-3" src="../assets/Line.png" alt="">
                  <p class="has-text-grey-light"> ordenar por </p>
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

                <section class="pl-2">
                  <user-card name="Eva Graves" 
                  email="eva.graves@gmail.com" 
                  phone="(16) 98135-4517" 
                  cpf="379.584.078-13" 
                  text="Sistemas Ativos"
                  />
                  <user-card name="Firmware" 
                  email="firmware@acquanativa.com.br" 
                  phone="(99)99999-9999" 
                  cpf="387.279.078-13" 
                  text="hardware"
                  />
                </section>
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
import Sidebar from '@/components/Sidebar.vue'
import FaixaCentral from '@/components/FaixaCentral.vue'
import UserCard from '../components/UserCard.vue'

export default {
  name: 'User',
  props: {
    
  },
  components:{
    Navbar,
    Sidebar,
    FaixaCentral,
    UserCard
  },
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
.box span{
  width: 2.5rem;
  height: 2.5rem;
}
</style>