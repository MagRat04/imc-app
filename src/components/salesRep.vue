<template>
  <div>
    <h3>
      Sales Rep:
      <span style="font-weight: normal"
        >{{ salesRep.FirstName }} {{ salesRep.LastName }} |
        {{ salesRep.EmailAddress }} | {{ salesRep.Phone }}</span
      >
    </h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["salesRep", "message"]),
  },
};
</script>

<style></style>
