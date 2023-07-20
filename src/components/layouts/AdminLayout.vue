<script setup>
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import {RouterLink} from "vue-router";
import axios from "axios";
import Api from "@/utils/Api";
import router from "@/router";

const logout = () => {
  // make http request to remove session
  axios.defaults.withCredentials = true;
  axios.post(`${Api.getBaseUrl()}/logout`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then(() => {
        // remove token from local storage
        localStorage.removeItem('token')
        // redirect to login
        router.push({ name: 'login' })
      })
      .catch(error => {
        // pending show alert
        console.log(error)
      })
}

</script>

<template>
  <BaseLayout>

    <!--  header slot  -->
    <template v-slot:header>
      <!-- navbar -->
      <div class="w-full">
        <nav class="w-full inline-flex bg-zinc-900 px-2 py-1 items-center justify-end">
          <RouterLink to="/home" class="text-zinc-50 p-2 hover:bg-zinc">Home</RouterLink>
          <button type="button" @click="logout" class="text-zinc-50 p-2 hover:bg-zinc">Logout</button>
        </nav>
      </div>
    </template>

    <!--  main slot  -->
    <slot></slot>

  </BaseLayout>
</template>