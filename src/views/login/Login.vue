<script setup>
// imports
import axios from "axios";
import {reactive, ref} from "vue";
import Api from "@/utils/Api";
import router from "@/router";
import HomeLayout from "@/components/layouts/HomeLayout.vue";

// properties
const form = reactive({
  name: null,
  password: null,
})

const message = ref(null)

/**
 * when form is submitted
 * @param event
 */
let submit = (event) => {
  // prevent event
  event.preventDefault()

  // make http request
  axios.post(`${Api.getBaseUrl()}/login`, form)
      .then(response => {
        // if response is 200
        if (response.status === 200)
        {
          // reset message
          message.value = null
          // store token
          localStorage.setItem('token', response.data.token)
          // redirect to home
          router.push({ name: 'home' })
        }
      })
      .catch(error => {
        // if response is 401 emit credential errors
        console.log("catch", error)
        if (error.response.status === 401)
          message.value = "Credentials error, unauthorized"
      })
}
</script>

<template>
  <HomeLayout>
    <div class="flex w-full h-full">
      <div class="m-auto bg-zinc-900 p-4 rounded-md w-2/4">
        <h3 class="font-bold text-zinc-200 text-center text-2xl mb-3">LOGIN</h3>
        <p v-if="message !== null" class="font-normal text-center text-sm text-red-300 mb-5">{{ message }}</p>
        <!-- form -->
        <form autocomplete="off" @submit.prevent="submit">
          <!-- filds -->
          <div class="flex flex-col space-y-3 items-start">
            <!-- user -->
            <div class="flex flex-col space-y-1 w-full">
              <label class="font-semibold text-md text-zinc-100" for="name">User:</label>
              <input v-model="form.name" id="name" name="name" type="text" maxlength="30" placeholder="username" class="px-2 py-0.5 rounded-md bg-zinc-600 text-slate-50 focus-within:bg-slate-500 focus-within:text-slate-100">
            </div>
            <!-- password -->
            <div class="flex flex-col space-y-1 w-full">
              <label class="font-semibold text-md text-zinc-100" for="password">Password:</label>
              <input v-model="form.password" id="password" name="password" type="password" maxlength="30" placeholder="type your password" class="px-2 py-0.5 rounded-md bg-zinc-600 text-slate-50 focus-within:bg-slate-500 focus-within:text-slate-100">
            </div>
          </div>
          <!-- footer form -->
          <div class="w-full inline-flex items-center justify-end mt-8">
            <button type="submit" class="px-3 py-1 rounded-md font-semibold bg-lime-500 text-zinc-950 hover:bg-lime-700 hover:text-lime-100 transition ease-in-out duration-300">Login</button>
          </div>

        </form>

      </div>
    </div>
  </HomeLayout>
</template>