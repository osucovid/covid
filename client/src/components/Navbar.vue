<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
    <b-navbar-brand href="#">COVID-19 Risk Assessment Tool</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Dashboard</b-nav-item>
        <b-nav-item href="#">Today's Assessment Data</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Reference Guide</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-form inline>
      <div class="create-post">
        <input type="text" name="username" v-model="text.username" placeholder="Username">
        <input type="text" name="password" v-model="text.password" placeholder="Password">
        <button v-on:click="createPost">Post!</button>
      </div>

  </b-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            User
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import loginService from '../loginService'

export default {
  name: 'Navbar',
  data() {
    return {
      posts: [],
      error: '',
      text: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async createPost() {
        await loginService.insertPost(this.text);
    }
  }
}
</script>
