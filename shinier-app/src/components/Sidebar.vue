<template>
  <div class="tile  mb-2 is-parent is-2">
    <article class="tile is-child">
      <div class="content is-flex is-flex-direction-column">
        <div class=" is-flex is-align-items-center">
          <img src="@/assets/sidemenu/Dash.png" alt="">
          <span class="m-3 ml-4 has-text-grey-light">Dashboard</span>
        </div>
        <div class=" is-flex is-align-items-center">
          <img src="@/assets/sidemenu/Group.png" alt="">
          <span class="m-2 has-text-grey-light">Grupos</span>
        </div>
        <div class=" is-flex is-align-items-center">
          <img src="@/assets/sidemenu/User.png" alt="">
          <span class="m-3 ml-5 has-text-grey-light">Usuários</span>
        </div>
        <div class=" is-flex is-align-items-center">
          <img src="@/assets/sidemenu/System.png" alt="">
          <span class="m-3 ml-5 has-text-grey-light">Sistema</span>
        </div>
        <div class=" is-flex is-align-items-center">
          <img src="@/assets/sidemenu/Categorie.png" alt="">
          <span class="m-3 ml-5 has-text-grey-light">Categorias</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props:{
    
  }
}
</script>
