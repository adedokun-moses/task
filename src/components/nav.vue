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
        <li style="margin-left: 37rem; border-bottom: none">
          Total payable amount:
          <span class="amount">${{ totalAmount }}</span> USD
        </li>
      </ul>
    </div>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  data() {
    return {
      totalAmount: 0,
    };
  },

  async created() {
    try {
      const res = await axios.get(
        "https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53"
      );
      let sum = 0;
      res.data.data.forEach((obj) => {
        if (obj.paymentStatus == "unpaid" || obj.paymentStatus == "overdue") {
          console.log(obj.amountInCents);
          sum += obj.amountInCents;
          this.totalAmount = sum;
        }
      });

    } catch (error) {
      console.log(error);
    }
  },
};
</script> 


<style scoped>
.nav {
  width: 90%;
  margin: auto;
}
.nav ul {
  display: flex;
  padding: 0px;
  list-style: none;
  border-bottom: 1px solid grey;
}
.nav li {
  margin: 0px 10px;
  padding-bottom: 3px;
}
.nav li a {
  margin: 0px 10px;
  padding-bottom: 3px;
  text-decoration: none;
  color: #6e6893;
}
.nav li:hover {
  margin: 0px 10px;
  padding-bottom: 3px;
  border-bottom: 2px solid grey;
}
/*  .nav li:focus {
  margin: 0px 10px;
  padding-bottom: 3px;
  border-bottom: 2px solid grey;
}  */

.router-link-active .router-link-exact-active{
  
  margin: 0px 10px;
  padding-bottom: 3px;
  border-bottom: 2px solid grey;
}
.amount {
  color: #6d5bd0;
  font-size: 20px;
  font-weight: bold;
}
</style>