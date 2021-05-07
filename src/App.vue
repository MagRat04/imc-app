<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img :src="logo" alt="" /></router-link>
      <h3>{{ companyName }}</h3>
    </div>
    <router-view />
    <div id="footer">
      <SalesRep />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SalesRep from "@/components/salesRep.vue";

export default {
  components: {
    SalesRep,
  },
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
body {
  background-color: $lightGray;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: $merriweather;
}
h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.7em;
}
hr {
  color: $yellow;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: $darkGray solid 3px;
  background-color: #fff;
  h3 {
    margin-left: 20px;
    align-content: center;
  }
}
#footer {
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
