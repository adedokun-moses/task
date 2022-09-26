<template>
  <div class="col-table">
    <div class="filterbox">
      <div class="search">
        <div class="dropdown">
          <button
            class="dropdown-toggle"
            v-on:click="sortingDetails = !sortingDetails"
          >
            <i class="fa fa-filter"> </i> Filter
          </button>
          <div class="dropdown-menu" v-show="sortingDetails">
            <h4 style="margin: 10px">Sort By:</h4>

            <div class="contents">
              <div><label>Default</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents">
              <div><label>First Name</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents">
              <div><label>Last Name</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents">
              <div><label>Due Date</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents" style="border-bottom: 2px solid grey">
              <div><label>Last Login</label></div>
              <div><input type="radio" /></div>
            </div>
            <h4 style="margin: 10px">USERS:</h4>
            <div class="contents">
              <div><label>All</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents">
              <div><label>Active</label></div>
              <div><input type="radio" /></div>
            </div>
            <div class="contents">
              <div><label>Inactive</label></div>
              <div><input type="radio" /></div>
            </div>
          </div>
        </div>

        <div class="users_search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search Users by Name, Email or Date"
            v-model="search"
          />
        </div>
      </div>
      <div class="payment">
        <button @click="submitPaid()">Pay Dues</button>
      </div>
    </div>
    <table>
      <thead>
        <th><input type="checkbox" /></th>
        <th>Name</th>
        <th>User Status</th>
        <th>Payment Status</th>
        <th>Amount</th>
        <th>:</th>
      </thead>

      <tbody v-for="user in resultQuery" :key="user.id">
        <tr>
          <td>
            <input
              type="checkbox"
              @change="markPaid(user.id, user.paymentStatus)"
            />
            <i
              class="fa fa-arrow-circle-down"
              style="margin-left: 15px; color: #8b83ba"
            ></i>
          </td>
          <td @click="openTableDetails(user.id)">
            <h5>
              {{ user.firstName }} {{ user.lastName }}<br />
              {{ user.email }}
            </h5>
          </td>
          <td @click="openTableDetails(user.id)">
            <h5>
              <span class="active"
                ><i class="fa fa-circle"></i> {{ user.userStatus }}</span
              >
              <br />
              Last login: {{ user.lastLogin }}
            </h5>
          </td>
          <td @click="openTableDetails(user.id)">
            <h5>
              <span class="paid" v-if="user.paymentStatus == 'paid'"
                ><i class="fa fa-circle"></i> {{ user.paymentStatus }}</span
              >
              <span class="unpaid" v-if="user.paymentStatus == 'overdue'"
                ><i class="fa fa-circle"></i> {{ user.paymentStatus }}</span
              >
              <br />
              Paid on: {{ user.paidOn }}
            </h5>
          </td>
          <td @click="openTableDetails(user.id)">
            <h5>
              ${{ user.amountInCents }}<br />USD
              <span
                style="margin-left: 100px; cursor: pointer"
                @click="openTableDetails(user.id)"
              >
                View More</span
              >
            </h5>
          </td>

          <td>
            <button class="delete_button" @click="openDeleteModal(user.id)">
              :
            </button>

            <div class="dropdown-menu_modal" v-if="openModal == user.id">
              <div class="contents">
                <div><label>Edit</label></div>
              </div>
              <div class="contents">
                <div><label>View Profile</label></div>
              </div>
              <div class="contents">
                <div>
                  <label @click="activate(user.id)"
                    ><span
                      ><i
                        class="fa fa-refresh fa-spin"
                        v-if="status == true"
                      ></i></span
                    >{{ msg ? msg : "Activate User" }}
                  </label>
                </div>
              </div>
              <div class="contents">
                <div>
                  <label style="color: red" @click="deleteUser(user.id)"
                    ><span
                      ><i class="fa fa-bell" v-if="status == true"></i></span
                    >{{ msg ? msg : "Delete User" }}</label
                  >
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="openTableDet == user.id" class="dropdown_table">
          <td colspan="2" style="text-align: center">
            <h5>Date</h5>
            <p>12/APR/2020</p>
          </td>
          <td colspan="2">
            <h5>User Activity</h5>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ultricies.
            </p>
          </td>
          <td colspan="3" >
            <h5>Details</h5>
            <p>
              Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. 
              Rhoncus,<br /> sed purus eu semper morbi id nunc, <br> adipiscing vitae.
              Ultricies suspendisse vestibulum.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paignation">
      <div class="page">
        <div>
          <span>Rows per page:</span>
          <select name="" id="">
            <option>10</option>
          </select>
        </div>

        <div>
          <h5>1-10 of 276</h5>
        </div>
        <div>
          <h5>
            <i class="fa fa-arrow-left"></i
            ><i class="fa fa-arrow-right" style="margin-left: 20px"></i>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import Search from "@/components/search.vue"; */
import axios from "axios";
export default {
  // components: { Search },
  data() {
    return {
      sortingDetails: false,
      tableDetails: false,
      openModal: "",
      openTableDet: "",
      checked_res: "",
      search: "",
      status: false,
      msg: "",
      get_id: [],
      users_d: [],
    };
  },
  methods: {
    openDeleteModal(id) {
      if (this.openModal == "") {
        return (this.openModal = id);
      }
      return (this.openModal = "");
    },
    openTableDetails(id) {
      if (this.openTableDet == "") {
        return (this.openTableDet = id);
      }
      return (this.openTableDet = "");
    },

    markPaid(id, type) {
      //var get_value = e.target._modelValue
      this.get_id.push({ id: id, type: type });
    },
    submitPaid() {
      this.get_id.forEach((data) => {
        if (data.type == "unpaid") {
          console.log(data.id, data.type);
          try {
            const res = axios.patch(
              "https://cornie-assessment.herokuapp.com/mark-paid/" + data.id
            );

            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
    },

    async activate(id) {
      this.status = true;
      try {
        const res = await axios.patch(
          "https://cornie-assessment.herokuapp.com/activate-user/" + id
        );
        let rec = res.data;
        if (rec.status == true) {
          this.status = false;
          this.msg = "User Activated";
          this.$router.go();
        }
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    },

    async deleteUser(id) {
      this.status = true;
      try {
        const res = await axios.delete(
          "https://cornie-assessment.herokuapp.com/remove-user/" + id
        );
        let rec = res.data;
        if (rec.status == true) {
          this.status = false;
          this.msg = "User Deleted";
          this.$router.go();
        }
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    resultQuery() {
      if (this.search) {
        return this.users.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.firstName.toLowerCase().includes(v));
        });
      } else {
        return this.users;
      }
    },
    /*    filtered(){
     return this.$store.state.search
    } */
  },
  mounted() {
    this.$store.commit("FETCH_ALL_DETAILS");
  },
};
</script>
<style scoped>
@import "../assets/css/hometbldet.css";
</style>
