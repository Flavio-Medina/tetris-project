<template>
  <b-modal id="siu" size="lg" hide-footer title="Sign in/up">
    <form>
      <div class="form-group">
        <label for="username">Email address</label>
        <input type="email" class="form-control" id="username" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>
    </form>
  </b-modal>
</template>

<style>
@import '../assets/css/modal.css';
</style>
