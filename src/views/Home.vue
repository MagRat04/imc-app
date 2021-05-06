<template>
  <div class="container">
    <div class="grid">
      <div v-for="item in items" :key="item.ItemID" class="cell">
        <router-link :to="{ name: 'Product', params: { id: item.ItemID } }">
          <img :src="item.PhotoName" class="responsive-image" />
        </router-link>
        {{ item.ItemName }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.responsive-image {
  max-width: 100%;
}
.cell {
  margin: 1rem;
}
.cell img {
  display: block;
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
