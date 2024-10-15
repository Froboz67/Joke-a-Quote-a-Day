<template>
  <div>
    <h1>REAL Joke-a-Quote-a-Day</h1>
    <div class="buttons">
      <button class="button-link" v-on:click="$router.push({ name: 'joke' })">
        Get a Joke
      </button>
      <button class="button-link" v-on:click="$router.push({ name: 'fact' })">
        Get a Fact
      </button>
      <button class="button-link" v-on:click="$router.push({ name: 'fact' })">
        Get a Quote
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.button-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: lightseagreen;
  color: white;
}
</style>