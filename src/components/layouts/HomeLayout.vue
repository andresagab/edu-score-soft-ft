<script setup>

import BaseLayout from "@/components/layouts/BaseLayout.vue";
import {RouterLink} from "vue-router";
</script>

<template>
  <BaseLayout>

    <!--  header slot  -->
    <template v-slot:header>
      <!-- navbar -->
      <div class="w-full">
        <nav class="w-full inline-flex bg-zinc-900 px-2 py-1 items-center justify-end">
          <RouterLink to="/login" class="text-zinc-50 p-2 hover:bg-zinc">Login</RouterLink>
        </nav>
      </div>
    </template>

    <!--  main slot  -->
    <slot></slot>

  </BaseLayout>
</template>