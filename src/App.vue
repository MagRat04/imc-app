<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img :src="logo" alt="" /></router-link>
      <h2>{{ companyName }}</h2>
    </div>
    <router-view />
    <div id="footer">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sunt
        a provident magnam itaque. Cum delectus totam assumenda dolores sequi?
        Tenetur ab sequi quisquam nobis distinctio nisi maxime voluptatem
        assumenda.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  beforeMount() {
    this.getData();
  },
  computed: {
    ...mapState(["manufacturerID", "companyName"]),
    logo() {
      return `http://images.repzio.com/productimages/${this.manufacturerID}/logo${this.manufacturerID}_lg.jpg?height=100`;
    },
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: $darkGray solid 3px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
