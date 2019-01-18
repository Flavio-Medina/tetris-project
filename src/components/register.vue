<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <p>If you want to post your highscores, you have to register and login with your registered account</p>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="username"
              class="form-control"
              name="username"
              placeholder="Please choose your username"
            >
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Please enter your email address"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Please choose your password"
            >
            <br>
            <div>
              <b-alert variant="danger" :show="alertUsername">Please enter a username</b-alert>
            </div>
            <div>
              <b-alert variant="danger" :show="alertEmail">Please enter an email</b-alert>
            </div>
            <div>
              <b-alert variant="danger" :show="alertPassword">Please enter a password</b-alert>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      alertUsername: false,
      alertEmail: false,
      alertPassword: false
    };
  },
  methods: {
    register() {
      axios
        .post("/user/register", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (!this.username) this.alertUsername = true;
          if (!this.email) this.alertEmail = true;
          if (!this.password) this.alertPassword = true;
          if (res.data.username && this.password) {
            console.log("Registration successful");
            router.push({ name: "login" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reglog.css";
@import "../assets/css/modal.css";
</style>
