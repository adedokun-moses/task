<template>
  <div>
    <Nav />
  </div>

  <alltbl v-if="all == true"></alltbl>
  <paidtbl v-if="paid == true"></paidtbl>
  <overdue v-if="overdue"></overdue>
  <unpaid v-if="unpaid"></unpaid>


  <!-- <h5 v-for="data in datas " :key="data.id">Moses {{data.id}}</h5> -->
</template>

 <script>
import Nav from "@/components/nav.vue";
import alltbl from "@/components/allTbl.vue";
import overdue from "@/components/overdue.vue";
import paidtbl from "@/components/paidTbl.vue";
import unpaid from "@/components/unpaid.vue"
export default {
  components: { Nav, alltbl, paidtbl, overdue, unpaid },
  data() {
    return {
      activeItem: "home",
      all: true,
      paid: false,
      overdue: false,
      unpaid: false,
    //  datas: ''

    };
  },
  methods: {
    viewTbls(type) {
      if (type == "all") {
        //alert('all')
        this.all = true;
        this.paid = false;
        this.overdue = false;
        this.unpaid = false
      }

      if (type == "paid") {
        //alert('paid')
        this.all = false;
        this.overdue = false;
        this.paid = true;
        this.unpaid = false
      }
      if (type == "overdue") {
        this.overdue = true;
        this.all = false;
        this.paid = false;
        this.unpaid =false
      }
      if(type == "unpaid"){
        this.unpaid = true;
        this.all = false;
        this.paid = false;
        this.overdue = false
      }
    },
    
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
.amount {
  color: #6d5bd0;
  font-size: 20px;
  font-weight: bold;
}

.filterbox {
  display: flex;
  width: 94%;
  margin: auto;
  align-items: center;
}
.filterbox > div {
  width: 100%;
}
.search {
  display: flex;
  align-items: center;
}

.dropbtn {
  font-size: 10px;
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #c6c2de;
  border-radius: 6px;
}
.users_search {
  display: flex;
  align-items: center;
  width: 70%;
  margin: 20px 10px;
  outline: none;
  background: #f4f2ff;
  border-radius: 6px;
}
.users_search i {
  margin: 0px 10px;
  color: #8b83ba;
}
.filterbox input {
  width: 100%;
  margin: 20px 10px;
  border: none;
  outline: none;
  background: #f4f2ff;
  border-radius: 6px;
}

.payment button {
  background: #6d5bd0;
  float: right;
  border-radius: 6px;
  padding: 20px 10px;
  color: white;
  border: none;
  width: 20%;
}

/* table */

.col-table {
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: auto;
  height: auto;
  margin-bottom: 60px;


}

table {
  width: 100%;
  margin: 10px auto;
  border-collapse: collapse;
}
table thead {
  background: #f4f2ff;
  padding: 10px;
}
table th {
  margin: 0px;
  text-align: left;
  padding: 13px 0px;
  border-bottom: 1px solid #d9d5ec;
  color: #6e6893;
}

table td {
  text-align: left;
  border-bottom: 1px solid #d9d5ec;
}
.data_details button {
  background: #d0d3d9;
  padding: 2px 10px;
  border-radius: 3px;
  border: 1px solid #d0d3d9;
}

.active {
  background: #e6e6f2;
  padding: 2px 15px;
  border-radius: 5px;
}
.paid {
  background: #007f00;
  padding: 2px 15px;
  border-radius: 5px;
}

/* >>>>>>>>> Drop Down Menu >>>>>>>> */
.dropdown {
  position: relative;
  display: inline-block;
  width: 20%;
}

/* .dropbtn {
  color: #200303;
  border: none;
  cursor: pointer;
  margin-left: 10px;
} */

.contents hr {
  width: 70%;
  color: red;
}

.contents {
  display: flex;
  align-items: center;
  margin: 0px 10px;
  padding: 0px;
  font-size: 10px;
}
.contents > div {
  width: 100%;
}
.contents input {
  margin: 10px;
}
.contents:hover {
  background: #d0d3d9;
  border-radius: 5px;
}

/* .contents > div {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
 */
.dropdown-content {
  display: none;
  position: absolute;
  left: 0px;
  background: #ffffff;
  border: 1px solid #c6c2de;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 0px;
  min-width: 150px;
  z-index: 1;
}

.dropdown-content a {
  color: #12036b;
  padding: 0px;
  background: white;
  width: 80%;
  text-decoration: none;
  margin: 5px auto;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .dropdown:hover .dropbtn {
  background-color: black;
} */

/* >>>>>>>>Ends HERE   >>>>>>>>>>>>>>>> */
</style>
