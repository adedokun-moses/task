<template>
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
         @input="execute()"
        />
      </div>
    </div>
    <div class="payment">
      <button @click="markPaid()">Pay Dues</button>
     
     
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    searchBar: {
      type: Function,
    },
  },
  data() {
    return {
      sortingDetails: false,
      details: [],
    };
  },
  methods: {
    execute() {
      // ... do something here
      return this.searchBar
   /*  if (this.searchBar) {
        this.searchBar();
      }  */
    },
  },

  mounted() {
    this.$parent.resultQuery = this.search;
  },

  async created() {
    try {
      const res = await axios.get(
        "https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53"
      );
      this.details = res.data.data;
      console.log(this.details);
      // console.log(this.details);
    } catch (error) {
      console.log(error);
    }
  },
  created() {
    this.$emit("new");
  },
};
</script>

<style scoped>
@import "../assets/css/hometbldet.css";
</style>