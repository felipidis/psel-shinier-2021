<template>
  <div class="hero has-background-black">
    <div class="hero-body">
      <div class="is-flex-desktop is-justify-content-space-between is-align-items-center">
        <div class="is-flex-desktop is-align-items-center " >
          <img src="../assets/Logo_analytics.png">
          <b-field >
            <b-input placeholder="Buscar Funcionalidades" ></b-input>
          </b-field>
        </div>
        <div class="">
          <p class="has-text-grey-lighter has-text-weight-bold">
            Super Admin
          </p>
        </div>
      </div>
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <p class="is-size-4 has-text-weight-bold has-text-grey-lighter">Usuários com acesso a plataforma</p>
        <b-button class="m-3  " type="is-success">Novo Usuário</b-button>
      </div>
      
      <div class="container is-rounded has-background-dark is-rounded is-flex is-justify-content-space-between ">
        <div class="is-flex">
          <img class="m-2" src="../assets/Filter.png" alt="Icone do filtro">
          <h1 class="m-2 has-text-grey-lighter ml-2" >Filtro | ordenar por</h1>
        </div>
        <div>
          <b-button type="is-black">Data</b-button>
          <b-button type="is-black">Nome</b-button>
          <b-button type="is-black">Atualização</b-button>
        </div>
        
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