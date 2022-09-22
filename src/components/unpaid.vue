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
        <button>Pay Dues</button>
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

      <tr class="dropdown-toggle" v-for="user in users" :key="user.id">
        <td v-on:click="tableDetails = !tableDetails">
          <input type="checkbox" />
          <i class="fa-solid fa-arrow-down" style="margin-left: 15px"></i>
        </td>
        <td>
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
            <span class="paid"
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

      <div class="dropdown-menu_table" v-show="tableDetails">
        <table class="dropdown_table">
          <thead>
            <th>Date</th>
            <th>User Activity</th>
            <th>Details</th>
          </thead>
          <tbody>
            <td>12/APR/2020</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ultricies.
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus,
              sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies
              suspendisse vestibulum.
            </td>
          </tbody>
        </table>
      </div>
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
import axios from "axios";
export default {
  data() {
    return {
      sortingDetails: false,
      tableDetails: false,
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
  },
  async created() {
    try {
      const res = await axios.get(
        "https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53"
      );
      const size = 4;
      this.users = res.data.data.splice(0, size);
      this.users.sort();
      console.log(this.users);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>

@import "../assets/css/hometbldet.css";

</style>
