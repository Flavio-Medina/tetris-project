<template>
  <div clas="container">
    <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">Username</th>
          <th class="center">Lines</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedUser" :key="item._id">
          <td class="text-left">{{ item.username }}</td>
          <td class="text-left">{{ item.lines }}</td>
          <td class="text-left">{{ item.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      User: [],
      items: [],
      currentSort: "score"
    };
  },
  methods: {
    sort: function(s) {
      this.currentSort = s;
    }
  },
  mounted() {
    axios
      .get("/user/highscore")
      .then(response => {
        this.User = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    sortedUser: function() {
      return this.User.sort((a, b) => {
        let modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
};
</script>

<style scoped>
#ind {
  width: 22px;
}

#username {
  width: 160px;
}

.table {
  font-size: 1.4em;
}
</style>
