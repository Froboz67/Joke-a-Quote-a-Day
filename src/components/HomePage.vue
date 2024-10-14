<template>
  <div>
    <h1>REAL Joke-a-Quote-a-Day</h1>
    <button v-on:click="$router.push({ name: 'joke' })">Joke</button>
    <RouterLink :to="{ name: 'joke' }">JOKE</RouterLink>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>