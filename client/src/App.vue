<template>
  <div id="app">
    <navbar />
    <Main />
    <Guide />
    <GeneralForm />
    <PostComponent />
    <Footer />
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PostComponent from './components/PostComponent.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
import Guide from './components/Guide.vue'
import GeneralForm from './components/GeneralForm'

export default {
  name: 'App',
  components: {
    PostComponent,
    Navbar,
    Footer,
    Main,
    Guide,
    GeneralForm
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
