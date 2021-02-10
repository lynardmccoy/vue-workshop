<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>
      <input v-model="greetingText" @input="writeToConsole" />
    </p>
    <p>
      <button @click="greet">Do something.</button>
    </p>
    <p>
      <img src="../assets/logo.png" v-show="showSecretImage" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      greetingText: "hi",
    }
  },
  methods: {
    greet() {
      alert(this.greetingText);
    },
    writeToConsole() {
      console.info(this.greetingText);
    }
  },
  computed: {
    showSecretImage() {
      return this.greetingText === "secret";
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
