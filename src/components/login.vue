<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <div>
            <p>You need to login in order to post and save your highscores</p>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="username"
              class="form-control"
              name="username"
              placeholder="Enter your username"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Enter your Password"
            >
            <br>
            <div>
              <b-alert variant="danger" :show="alertUsername">Please enter a username</b-alert>
            </div>
            <div>
              <b-alert variant="danger" :show="alertPassword">Please enter a password</b-alert>
            </div>
            <div>
              <b-alert variant="danger" :show="alertWrong">Username or password is incorrect</b-alert>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import EventBus from "./EventBus";

export default {
  data() {
    return {
      username: "",
      password: "",
      alertUsername: false,
      alertPassword: false,
      alertWrong: false
    };
  },

  methods: {
    login() {
      if (!this.username) this.alertUsername = true;
      if (!this.password) this.alertPassword = true;
      
      axios
        .post("/user/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data.token);
          if (res.data.token) {
            console.log("Success");
            router.push({ name: "startmenu" });
          } else {
            this.alertWrong = true;
          }
          this.username = "";
          this.password = "";
        })
        .catch(err => {
          console.log(err);
        });
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reglog.css";
@import "../assets/css/modal.css";
</style>