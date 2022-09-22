<template>
  <div class="col-table">
    <div class="filterbox">
      <h4>overdue</h4>
      <div class="search">
        <div class="dropdown">
          <button class="dropbtn"><i class="fa fa-filter"> </i> Filter</button>
          <div class="dropdown-content" >
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
          />
        </div>
      </div>
      <div class="payment">
        <button>Pay Dues</button>
      </div>
    </div>
    <table >
      <thead>
        <th><input type="checkbox" /></th>
        <th>Name</th>
        <th>User Status</th>
        <th>Payment Status</th>
        <th>Amount</th>
        <th>:</th>
      </thead>

      <tr class="drop-btn">
        <td>
          <input type="checkbox" />
          <i class="fa fa-bell" style="margin-left: 15px"></i>
        </td>
        <td>
          <h5>
             Septimus <br />
            example@email.com
          </h5>
        </td>
        <td>
          <h5>
            <span class="active">Active</span> <br />
            Last login: 14/APR/2020
          </h5>
        </td>
        <td>
          <h5>
            <span class="paid">Paid</span> <br />
            Paid on : 14/APR/2020
          </h5>
        </td>
        <td>
          <h5>
            $200 <br />USD <span style="margin-left: 100px"> View More</span>
          </h5>
        </td>

        <td>:</td>
      </tr>

      <div class="dropdown-content">
        l
        <h5>Table</h5>
      </div>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data() {
    return {
     // datas: [],
    };
  },
  methods: {},

 /*   */
};
</script>
<style scoped>
@import "../assets/css/hometbldet.css";
</style>
