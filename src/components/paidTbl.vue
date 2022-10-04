<template>
  <div class="col-table">
    <Search :searchBar="fiteredUser" />

    <table>
      <thead>
        <th><input type="checkbox" /></th>
        <th>Name</th>
        <th>User Status</th>
        <th>Payment Status</th>
        <th>Amount</th>
        <th>:</th>
      </thead>
      <tbody>
        <tr
          class="dropdown-toggle"
          v-for="user in fiteredUser()"
          :key="user.id"
        >
          <td>
            <input type="checkbox" />
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
          <td>
            <h5>
              <span class="active"
                ><i class="fa fa-circle"></i> {{ user.userStatus }}</span
              >
              <br />
              Last login: {{ user.lastLogin }}
            </h5>
          </td>
          <td>
            <h5>
              <span class="paid" style="color: #007f00; background: #cdffcd"
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
        
      </tbody>
    </table>
    <div class="paignation">
      <div class="page">
        <div>
          <span>Rows per page:</span>
          <select name="">
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
import axios from "axios";
import Search from "@/components/search.vue";
export default {
  components: { Search },
  data() {
    return {
      sortingDetails: false,
      openTableDet: "",
      openModal: "",
      search: "",
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

  /*   openTableDetails(id) {
      if (this.openTableDet == "") {
        return (this.openTableDet = id);
      }
      return (this.openTableDet = "");
    }, */

    async fetchUsers() {
      try {
        const res = await axios.get(
          "https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53"
        );
        let newuser = res.data.data.filter((obj) => {
          return obj.paymentStatus == "paid";
        });
        this.users = newuser;
      } catch (error) {
        console.log(error);
      }
    },

    fiteredUser() {
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

    /*   newDets(){
      alert("working")
    } */
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>


<style scoped>
@import "../assets/css/hometbldet.css";
</style>
