<template>
  <div class="tile is-parent is-10 p-2 mb-1">
    <article class="tile is-child has-background-dark box">
      <div class="content is-flex is-flex-direction-column">
        <div>
          <Header class="is-flex is-justify-content-space-between">
            <div class="is-flex is-align-items-center is-flex-wrap-nowrap">
              <img class="mx-2" src="../assets/Filter.png" alt="" />
              <span class="pt-2 has-text-grey-light"> Filtros </span>
              <img class="mx-3" src="../assets/Line.png" alt="" />
              <p class="has-text-grey-light">ordenar por</p>
            </div>
            <div class="buttons has-addons">
              <button class="button is-black is-selected">Yes</button>
              <button class="button is-black has-background-black-bis">
                Maybe
              </button>
              <button class="button is-black has-background-black-bis">
                No
              </button>
            </div>
          </Header>

          <main>
            <div class="is-flex is-align-items-center">
              <p class="p-2 has-text-grey-light">Usuários</p>
              <hr class="hr has-background-grey" />
            </div>

            <section class="pl-2">
              <user-card
                name="Eva Graves"
                email="eva.graves@gmail.com"
                phone="(16) 98135-4517"
                cpf="379.584.078-13"
                text="Sistemas Ativos"
                :showpill="true"
              />
              <user-card
                name="Firmware"
                email="firmware@acquanativa.com.br"
                phone="(99)99999-9999"
                cpf="387.279.078-13"
                text="hardware"
                :showpill="false"
                type="Firmware"
              />
            </section>
          </main>

          <footer class="paginate">
            <nav class="pagination" role="navigation" aria-label="pagination">
              <ul class="pagination-list is-flex is-align-items-center">
                <a class="pagination-link color has-text-white"
                  >{{ initial }}
                </a>
                <a class="pagination-link color has-text-white"
                  >{{ previous }}
                </a>
                <a class="pagination-next color has-text-white"> > </a>
                <a class="pagination-next color has-text-white"> >> </a>
                <a class="pagination-link color has-text-white">1</a>

                <a
                  class="pagination-link color has-text-white"
                  aria-label="Goto page 2"
                  >2</a
                >
                <a
                  class="pagination-link color has-text-white"
                  aria-label="Page 3"
                  aria-current="page"
                  >3</a
                >
                <a
                  class="pagination-link color has-text-white"
                  aria-label="Goto page 4"
                  >4</a
                >
                <a
                  class="pagination-link color has-text-white"
                  aria-label="Goto page 5"
                  >5</a
                >
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <a
                  class="pagination-link color has-text-white"
                  aria-label="Goto page 20"
                  >20</a
                >
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

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
    UserCard,
  },
};
</script>

<style>
</style>