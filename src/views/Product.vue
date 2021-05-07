<template>
  <div class="container">
    <div class="grid details-card">
      <div id="imageContainer" class="cell">
        <img
          :src="productImg"
          :alt="selctedItem.ItemName"
          class="responsive-image"
        />
      </div>
      <div class="cell" style="text-align: left">
        <h1>{{ selctedItem.ItemName }}</h1>
        <hr />
        <h3 id="price">${{ selctedItem.BasePrice }}</h3>
        <p id="itemId">Product ID: {{ selctedItem.ItemID }}</p>
        <p id="itemDimensions">Dimensions: {{ selctedItem.Dimensions }}</p>
        <p id="desc" v-if="selctedItem.Description != ''">
          Description: {{ selctedItem.Description }}
        </p>
        <div class="button">Add to cart</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["selctedItem"]),
    productImg() {
      return `http://images.repzio.com/productimages/202/${this.id}_lg.jpg?w=450&mode=crop&crop=10,10,-10,-10`;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  padding-bottom: 15px;
  font-size: 32px;
}
#price {
  font-size: 20px;
}
#desc {
  margin-top: 25px;
  font-size: 16px;
  line-height: 1.6;
}
#imageContainer {
  background-color: #fff;
}

.details-card {
  width: 90%;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  padding: 10px 0;
}

.sizing-list {
  margin-top: 25px;
  padding: 0px;
  list-style-type: none;
}

.button {
  flex: 1 1 auto;
  margin: 10px;
  padding: 20px;
  border: 2px solid $yellow;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: $yellow;
    height: 120%;
    left: -10%;
    transform: skewX(15deg);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    &:after {
      left: -10%;
      width: 120%;
    }
  }
}

@include tablet {
  .cell {
    width: calc(50% - 2rem);
  }
}
</style>
