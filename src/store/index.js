import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    totalAmount: 0,
    users: [],
    search: ''
  },

  mutations: {
    TOTAL_AMOUNT(state) {
      axios
        .get("https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53")
        .then((res) => {
          let sum = 0;
          res.data.data.forEach((obj) => {
            if (obj.paymentStatus == "unpaid" || obj.paymentStatus == "overdue") {
              sum += obj.amountInCents;
              state.totalAmount = sum;
            }
            //  console.log(sum)
          })
        }).catch((err) => {
          console.log(err)

        })
    },

    FETCH_ALL_DETAILS(state) {
      axios
        .get("https://cornie-assessment.herokuapp.com/users/9eSxi9Aw9420P53")
        .then((res) => {
          const size = 18;
          state.users = res.data.data.slice(0, size);
         /*  console.log(state.users) */
        }).catch((err) => {
          console.log(err)

        })

    },

    SEARCH_BAR(state) {
      if (state.search) {
        return state.users.filter((item) => {
          return state.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.firstName.toLowerCase().includes(v));
        });
      } else {
        return state.users;
      }
    },
    SORT_USER(state) {
      state.users.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      console.log(state.users);
    },





  },
  actions: {
  },
  modules: {
  }
})
