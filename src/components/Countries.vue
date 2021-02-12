<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>
      <ips-button @click="getCountries">All countries</ips-button>
    </p>
    <p>
      <select @change="selectCountry($event)">
        <option v-for="country in countries" v-bind:key="country.alpha2Code" v-bind:value="country.alpha2Code">
          {{ country.name }}
        </option>
      </select>
    </p>
    <p>
      {{ selectedCountry }}
    </p>
    <p>
      <img v-bind:src="selectedCountry.flag" />
    </p>
  </div>
</template>

<script>
export default {
  name: "Countries",
  props: {
    title: String,
  },
  data() {
    return {
      countries: [],
      selectedCountry: {},
    };
  },
  methods: {
    getCountries() {
      console.info("getCountries");
      this.axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
          console.log(response.data);
          response.data.map((country) => this.countries.push(country));
        });
    },
    selectCountry(event) {
      console.info("selectCountry", event);
//      const options = event.target.value;
      const alpha2Code = event.target.options[event.target.options.selectedIndex].value;
      console.info(alpha2Code);
      this.axios
        .get("https://restcountries.eu/rest/v2/alpha/" + alpha2Code)
        .then((response) => {
          console.log(response.data);
          this.selectedCountry = response.data;
        });
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>