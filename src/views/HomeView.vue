<template>
  <div>
    <Nav />
  </div>

  <alltbl v-if="all == true"></alltbl>
  <paidtbl v-if="paid == true"></paidtbl>
  <overdue v-if="overdue == true"></overdue>
  <unpaid v-if="unpaid == true"></unpaid>
</template>

 <script>
import Nav from "@/components/nav.vue";
import alltbl from "@/components/allTbl.vue";
import overdue from "@/components/overdue.vue";
import paidtbl from "@/components/paidTbl.vue";
import unpaid from "@/components/unpaid.vue";
export default {
  components: { Nav, alltbl, paidtbl, overdue, unpaid },
  data() {
    return {
      activeItem: "home",
      all: true,
      paid: false,
      overdue: false,
      unpaid: false,
    };
  },
  methods: {
    viewTbls(type) {
      if (type == "all") {
        //alert('all')
        this.all = true;
        this.paid = false;
        this.overdue = false;
        this.unpaid = false;
      }

      if (type == "paid") {
        //alert('paid')
        this.all = false;
        this.overdue = false;
        this.paid = true;
        this.unpaid = false;
      }
      if (type == "overdue") {
        this.overdue = true;
        this.all = false;
        this.paid = false;
        this.unpaid = false;
      }
      if (type == "unpaid") {
        this.unpaid = true;
        this.all = false;
        this.paid = false;
        this.overdue = false;
      }
    },
  },
};
</script> 

