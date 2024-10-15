<template>
  <div>
    <h1>This is the Joke-a-Quote-a-Day App</h1>
    <button v-on:click="getRandomJoke">JOKE</button>
    <button v-on:click="$router.push({ name: 'home' })">HOME</button>
  </div>
  <div>
    <h2>{{ this.joke }}</h2>
  </div>
  
</template>

<script>
import JokeService from '../sevices/JokeService';


export default {
  data() {
    return {
      joke: '',
    }
  },
 
  methods: {
    getRandomJoke() {
      JokeService
      .getJoke()
      .then((response) => {
        console.log(response);
        this.joke = response.data.joke;
        console.log(this.joke);
      })
    }
  }
};
</script>

<style scoped>
</style>