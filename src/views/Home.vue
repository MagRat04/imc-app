<template>
  <div class="container">
    <h1>Product Gallery</h1>
    <div class="grid">
      <div v-for="item in items" :key="item.ItemID" class="cell">
        <router-link
          :to="{ name: 'Product', params: { id: item.ItemID } }"
          @click.native="selectedItem(item)"
        >
          <img :src="photoURL(item.PhotoName)" class="responsive-image" />
        </router-link>
        <h2>{{ item.ItemName }}</h2>
        <h3>${{ item.BasePrice }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    ...mapActions(["selectItem"]),
    photoURL(url) {
      return url + "?w=300&h=300&mode=carve&crop=10,10,-10,-10";
    },
    selectedItem(item) {
      this.selectItem(item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  background-color: $lightGray;
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

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  margin-top: 75px;
}

.responsive-image {
  max-width: 100%;
}
.cell {
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
}
.cell img {
  display: block;
}
.grid {
  margin-top: 75px;
}
@include tablet {
  .grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .cell {
    width: calc(50% - 2rem);
  }
}

@include tablet-landscape {
  .cell {
    width: calc(33.3333% - 2rem);
  }
}
</style>
