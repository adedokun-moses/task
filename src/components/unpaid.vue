<template>
  <div class="col-table">
    <Search />
    <table>
      <thead>
        <th><input type="checkbox" /></th>
        <th>Name</th>
        <th>User Status</th>
        <th>Payment Status</th>
        <th>Amount</th>
        <th>:</th>
      </thead>

      <tr class="dropdown-toggle" v-for="user in users" :key="user.id">
        <td >
          <input type="checkbox" />
          <i
            class="fa fa-arrow-circle-down"
            style="margin-left: 15px; color: #8b83ba"
          ></i>
        </td>
        <td>
          <h5>
            {{ user.firstName }} {{ user.lastName }}<br />
            {{ user.email }}
          </h5>
        </td>
        <td @click="openDetails(user.id)">
          <h5>
            <span
              class="active"
              style="background: #e6e6f2 !important; color: #4a4aff !important"
              ><i class="fa fa-circle"></i> {{ user.userStatus }}</span
            >
            <br />
            Last login: {{ user.lastLogin }}
          </h5>
        </td>
        <td>
          <h5>
            <span class="paid" style="color: #965e00; background: #ffeccc"
              ><i class="fa fa-circle"></i> {{ user.paymentStatus }}</span
            >
            <br />
            Paid on: {{ user.paidOn }}
          </h5>
        </td>
        <td>
          <h5>
            ${{ user.amountInCents }}<br />USD
            <span style="margin-left: 100px"> View More</span>
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
              <div><label>Activate User</label></div>
            </div>
            <div class="contents">
              <div><label style="color: red">Delete User</label></div>
            </div>
          </div>
        </td>
      </tr>

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
import Search from "@/components/search.vue";
import axios from "axios";
export default {
  components: { Search },
  data() {
    return {
      tableDetails: "",
      openModal: "",
      search: null,
      users: [],
    };
  },

  methods: {
    openDeleteModal(id) {
      if (this.openModal == "") {
        return (this.openModal = id);
      }
      return (this.openModal = "");
    },

 /*    openDetails(id) {
      if (this.tableDetails == "") {
        return (this.tableDetails = id);
      }
      return (this.tableDetails = "");
    }, */
    async fetchUsers() {
      try {
        const res = await axios.get(
          "https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53"
        );
        const user = res.data.data.filter((obj) => {
          return obj.paymentStatus == "unpaid";
        });
        this.users = user;
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },
    
  },
 
  mounted() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
@import "../assets/css/hometbldet.css";
</style>
