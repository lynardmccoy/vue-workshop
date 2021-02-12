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
      <img src="../assets/logo.png" v-show="showSecretImage"/>
    </p>
    <h3>You have fruit</h3>
    <ul>
      <li v-bind:class="{'my-class': fruit === 'mangoes'}" v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</li>
    </ul>
    <p>
      <input v-model="fruitName" />
    </p>
    <p>
      <ips-button variant="danger" @click="addFruit">Add fruit.</ips-button>
    </p>
    <p>
      <ips-editor></ips-editor>
    </p>
    <p>
      <ips-tel-input></ips-tel-input>
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
      fruits: ["apples", "oranges"],
      fruitName: "",
    }
  },
  methods: {
    greet() {
      alert(this.greetingText);
    },
    writeToConsole() {
      console.info(this.greetingText);
    },
    addFruit() {
      this.fruits.push(this.fruitName);
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
/*  list-style-type: square;*/
  list-style-position: inside;
  padding: 0;
}
li {
  display: /*inline-block*/list-item;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-class {
  color: green;
}
</style>
<style>
  .ck.ck-editor {
    width: 50%;
    font-family: monospace;
  }
</style>