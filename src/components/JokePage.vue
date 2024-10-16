<template>
  <div>
    <h1>This is the Joke Page</h1>
    <div class="buttons">
      <button class="button-link" v-on:click="getRandomJoke">
        Random Joke
      </button>
      <button class="button-link" v-on:click="$router.push({ name: 'home' })">
        Home
      </button>
    </div>
  </div>
  <div v-if="showJoke" class="fact-box">
    <h2>{{ this.joke }}</h2>
  </div>
</template>

<script>
import JokeService from "../services/JokeService";

export default {
  data() {
    return {
      joke: "",
      showJoke: false,
    };
  },

  methods: {
    getRandomJoke() {
      JokeService.getJoke()
        .then((response) => {
          this.joke = response.data.joke;
          this.showJoke = true;
        })
        .catch((error) => {
          console.log("error getting Joke", error);
        });
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 15px;
}
button {
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
}
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
.fact-box {
  display: grid;
  margin: 12%;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  text-align: center;
  background-color: gainsboro;
  font-size: 20px;
}
body {
  max-width: 550px;
  margin: 0 auto;
}

@media only screen and (max-width: 550px) {
  .app-container {
    width: 100%;
    padding: 5px;
  }
}
</style>