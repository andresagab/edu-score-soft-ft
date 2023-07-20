<script setup>

</script>

<template>

  <div class="h-screen bg-zinc-800">
    <!-- header  -->
    <header>
      <slot name="header"></slot>
    </header>
    <!-- main -->
    <main>
      <slot></slot>
    </main>
  </div>


</template>