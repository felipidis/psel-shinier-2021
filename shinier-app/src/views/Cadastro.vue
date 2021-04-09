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

      <div class="tile is-parent is-10 p-2 mb-1">
        <article class="tile is-child has-background-dark box">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Nome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Text input"
                      required
                    />
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Senha</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="*********"
                      required
                    />
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Repetir Senha</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="*********"
                    />
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">CPF</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="999.999.999-99"
                    />
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Telefone</label>
                  <div class="control">
                    <input
                      class="input"
                      type="tel"
                      placeholder="(DD) 99999-9999"
                      required
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="field">
                  <label class="label has-text-grey-light">Grupo</label>
                  <b-field>
                    <b-select
                      placeholder="Super Admin - cargo -  Pessoas responsáveis com todas as funcionalidades"
                      expanded
                    >
                      <option value="Super">Super Admin</option>
                      <option value="Admin">Admin</option>
                    </b-select>
                  </b-field>
                </div>
              </article>
            </div>
          </div>
          <div>
            <p class="has-text-grey-light">Grupos Extras</p>
            <div class="tile is-ancestor mt-2">
              <div class="tile is-parent">
                <article class="tile is-child is-2">
                  <div class="field">
                    <label class="label has-text-grey-light">Campo 1</label>
                    <div class="control">
                      <input
                        class="input"
                        type="password"
                        placeholder="*********"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- Fim SideBar e Container Usuários -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import FaixaCentral from "@/components/FaixaCentral.vue";

export default {
  name: "",
  props: {},
  components: {
    Navbar,
    Sidebar,
    FaixaCentral,
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