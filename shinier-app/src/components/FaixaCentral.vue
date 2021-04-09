<template>
  <section class="mx-4">
    <div class="tile is-parent">
      <div class="tile is-child is-2"></div>
      <div class=" tile is-child is-10 is-flex is-justify-content-space-between is-align-items-center">
        <h1 class="has-text-grey-light is-size-3 has-text-weight-bold"> {{mainText}}</h1>
        <b-button key="users" v-if="condition"  type="is-success"> <router-link class="has-text-white" to="/cadastro"> {{buttonText}} </router-link> </b-button>
        <b-button key="register" v-else type="is-success"> <router-link class="has-text-white" to="/"> {{buttonText}} </router-link> </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaixaCentral',
  props: {
    mainText : String,
    buttonText: String,
    condition: Boolean
  },
}
</script>
