<template>
  <div class="box has-background-black-bis p-5">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <div class="is-flex is-align-items-center">
        <img src="@/assets/Eva.png" alt="User photo" />
        <div class="size">
          <p class="ml-2 my-0 has-text-white is-size-7">{{ name }}</p>
          <p class="ml-2 my-0 has-text-white is-size-7">{{ email }}</p>
        </div>
      </div>
      <div>
        <div>
          <p class="ml-2 my-0 has-text-white is-size-7">{{ phone }}</p>
          <p class="ml-2 my-0 has-text-white is-size-7">{{ cpf }}</p>
        </div>
      </div>

      <div>
        <div>
          <p class="ml-2 my-0 mt-1 has-text-white is-size-7">{{ text }}</p>
          <div v-if="showpill" class="ml-2">
            <span> <img src="@/assets/PillActive.png" alt="" /></span>
            <span> <img src="@/assets/PillActive.png" alt="" /></span>
            <span> <img src="@/assets/PillActive.png" alt="" /></span>
            <span> <img src="@/assets/PillActive.png" alt="" /></span>
            <span> <img src="@/assets/PillDisable.png" alt="" /></span>
          </div>
          <p v-else class="ml-2 my-0 mt-1 has-text-white is-size-7">
            {{ type }}
          </p>
        </div>
      </div>

      <div>
        <div>
          <span class="m-1"> <img src="@/assets/OvalGreen.png" alt="" /></span>
          <span class="m-1"> <img src="@/assets/OvalYellow.png" alt="" /></span>
          <span class="m-1"> <img src="@/assets/OvalRed.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    text: String,
    name: String,
    email: String,
    phone: String,
    cpf: String,
    showpill: Boolean,
    type: String,
  },
};
</script>
