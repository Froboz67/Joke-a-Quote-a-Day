<template>
  <div>
    <h1>This is the Fact Page</h1>
    <div class="buttons">
      <button v-on:click="getRandomFact">Random Fact</button> |
      <button v-on:click="$router.push({ name: 'home' })">Home</button>
    </div>
  </div>
  <div class="fact-box">
    {{ this.fact }}
  </div>
</template>

<script>
import FactService from "../services/FactService";

export default {
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    getRandomFact() {
      FactService.getFact().then((response) => {
        console.log(response);
        this.fact = response.data.text;
        console.log(this.fact);
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
  justify-content: center;
}
.fact-box {
  display: grid;
  margin: 12%;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  text-align: center;
}
</style>