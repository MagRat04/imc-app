<template>
  <div>
    <h1>Product Page: {{ id }}</h1>
    <img :src="productImg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    productImg() {
      return (
        "http://images.repzio.com/productimages/202/" + this.id + "_lg.jpg"
      );
    },
  },
};
</script>

<style></style>
