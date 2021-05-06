<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img :src="logo" alt="" /></router-link>
    </div>
    <router-view />
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
    ...mapState(["manufacturerID"]),
    logo() {
      return (
        "http://images.repzio.com/productimages/" +
        this.manufacturerID +
        "/logo" +
        this.manufacturerID +
        "_lg.jpg"
      );
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
  padding: 30px;
  border-bottom: $accent solid 12px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
