<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Inicio da Navbar -->
    <navbar />
    <!-- Fim da Navbar -->

    <!-- Fim da Faixa -->
    <faixa-central
      mainText="Cadastrar Novo Usuário"
      buttonText="Salvar"
      :condition="false"
    />
    <!-- Fim da Faixa -->

    <!-- Inicio SideBar e Cadastro -->

    <div class="tile mx-4 mb-2">
      <sidebar />
      <register-main />
    </div>
    <!-- Fim SideBar e Container Usuários -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import FaixaCentral from "@/components/FaixaCentral.vue";
import RegisterMain from "../components/RegisterMain.vue";

export default {
  name: "",
  props: {},
  components: {
    Navbar,
    Sidebar,
    FaixaCentral,
    RegisterMain,
  },
};
</script>

<style>
.text-input {
  width: 30.625rem;
  height: 2.5rem;
}
.hr {
  flex: 1;
  margin-left: 10px;
  margin-top: 12px;
  height: 1px;
  border: none;
}
</style>