<template>
  <div class="container">
    <div class="grid">
      <div v-for="item in items" :key="item.ItemID" class="cell item-card">
        <div class="item-thumb">
          <router-link
            :to="{ name: 'Product', params: { id: item.ItemID } }"
            @click.native="selectedItem(item)"
          >
            <img v-lazy="photoURL(item.PhotoName)" class="responsive-image" />
          </router-link>
        </div>
        <div class="item-details">
          <span class="item-catagory">Brown, Wood</span>
          <h4>
            <router-link
              :to="{ name: 'Product', params: { id: item.ItemID } }"
              @click.native="selectedItem(item)"
              >{{ item.ItemName }}</router-link
            >
          </h4>
          <div class="item-price">{{ formatPrice(item.BasePrice) }}</div>
        </div>
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
      return `${url}?w=300&h=300&mode=carve&crop=10,10,-10,-10`;
    },
    selectedItem(item) {
      this.selectItem(item);
    },
    formatPrice(ammt) {
      return ammt.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style lang="scss">
// Grid Styles
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  // margin-top: 75px;
}

.responsive-image {
  max-width: 100%;
}

.cell {
  margin: 1rem;
}
.cell img {
  // display: block;
}

a {
  text-decoration: none;
}
.item-card {
  width: 320px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  background: #fafafa;
  text-align: center;
}

.item-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 20px;
  background: #fff;
}

.item-thumb img {
  max-width: 100%;
  max-height: 100%;
}

.item-details {
  padding: 30px;
}

.item-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.item-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.item-details h4 a:hover {
  color: #fbb72c;
}

.item-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
}

.item-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.item-links {
  text-align: right;
}

.item-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.item-links a:hover {
  color: #fbb72c;
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
  // .item-card {
  //   width: 380px;
  // }
  // .item-thumb {
  //   padding: 50px;
  // }
}

@include tablet-landscape {
  .cell {
    width: calc(33.3333% - 2rem);
  }
}
</style>
