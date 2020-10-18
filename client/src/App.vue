<template>
  <div id="app">
    <navbar />
    <Main />
    <PostComponent msg="Welcome to Your Vue.js App"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PostComponent from './components/PostComponent.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    PostComponent,
    Navbar,
    Footer,
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
