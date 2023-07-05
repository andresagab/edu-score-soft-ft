<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- header section -->
  <section>
    <header>

      <!-- navbar -->
      <div class="w-full">
        <nav class="w-full inline-flex bg-zinc-900 px-2 py-1 items-center justify-end">
          <RouterLink to="/login" class="text-zinc-50 p-2 hover:bg-zinc">Login</RouterLink>
        </nav>
      </div>


    </header>
  </section>

  <!-- content view section  -->
  <section class="h-screen bg-zinc-800">
    <RouterView />
  </section>

</template>
