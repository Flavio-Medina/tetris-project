<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-5 mx-auto">
                <form v-on:submit.prevent="login">
                    <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" v-model="username" class="form-control" name="email" placeholder="Enter your username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter your Password">
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('/user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.username = ''
        this.password = ''
        router.push({ name: 'startmenu' })
      }).catch(err => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>