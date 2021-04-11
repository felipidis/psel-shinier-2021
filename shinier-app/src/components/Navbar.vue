<template>
  <div class="hero-head is-flex is-align-items-center mx-4 mb-2">
    <div class="tile is-parent is-2">
      <img src="@/assets/Logo_analytics.png" alt="Logo da Analytics" />
    </div>
    <div
      class="tile is-parent is-10 is-flex is-justify-content-space-between is-align-items-center"
    >
      <b-field>
        <b-input
          placeholder="Buscar Funcionalidades"
          type="search"
          icon-pack="fas"
          icon="search"
          class="text-input"
        >
        </b-input>
      </b-field>

      <div class="is-flex mr-5">
        <span class="box mt-3 mr-4"></span>
        <div>
          <p class="has-text-white is-size-6 mr-6 mt-2">Super Admin</p>
          <p class="has-text-white is-size-7 mr-6 is-uppercase">Super Admin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>
