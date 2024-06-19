<script setup>

</script>

<template>
  <!-- cabeçalho -->
  <header class="flex items-center justify-between p-8">
    <div>
      <RouterLink to="/dashboard">
        <img src="../assets/user.svg" alt="user" class="w-8 h-8">
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/">
        <h1 class="font-bold tracking-widest text-2xl">NOX STORE</h1>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/carrinho">
        <img src="../assets/cart.svg" alt="cart" class="w-8 h-8">
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>

</style>
