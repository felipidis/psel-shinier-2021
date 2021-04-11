<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Inicio da Navbar -->
    <navbar />
    <!-- Fim da Navbar -->

    <!-- Fim da Faixa -->
    <faixa-central
      mainText="Usuários com acesso a plataforma"
      :condition="true"
      buttonText="Novo Usuário"
    />
    <!-- Fim da Faixa -->

    <!-- Inicio SideBar e Container Usuários -->

    <div class="tile mx-4 mb-2">
      <sidebar />

      <user-main />
    </div>
    <!-- Fim SideBar e Container Usuários -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar.vue";
import FaixaCentral from "@/components/FaixaCentral.vue";
import UserMain from "../components/UserMain.vue";

export default {
  name: "User",
  props: {},
  data() {
    return {
      previous: "<",
      initial: "<<",
    };
  },
  components: {
    Navbar,
    Sidebar,
    FaixaCentral,
    UserMain,
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
.box span {
  width: 2.5rem;
  height: 2.5rem;
}

.color {
  background-color: #68a35d;
}

.paginate {
  position: absolute;
  bottom: 26px;
  right: 30px;
}

::-webkit-scrollbar {
  display: none;
}

.size {
  width: 150.47px;
}
</style>