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
        <tr v-for="item in User" :key="item._id">
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
      User: []
    };
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
