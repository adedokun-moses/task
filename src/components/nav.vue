<template>
  <div class="nav">
    <div>
      <ul>
        <li>
          <router-link to="#" @click="this.$parent.viewTbls('all')"
            >All</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="this.$parent.viewTbls('paid')"
            >Paid</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="this.$parent.viewTbls('unpaid')"
            >Unpaid</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="this.$parent.viewTbls('overdue')"
            >Overdue</router-link
          >
        </li>
        <li class="amount_des">
          Total payable amount:
          <span class="amount">${{ totalAmount }}</span> USD
        </li>
      </ul>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {};
  },
  methods() {},
  computed: {
    totalAmount() {
      return this.$store.state.totalAmount;
    },
  },
  mounted() {
    this.$store.commit("TOTAL_AMOUNT");
  },
};
</script> 

<style scoped>
@import "../assets/css/hometbldet.css";
</style>

