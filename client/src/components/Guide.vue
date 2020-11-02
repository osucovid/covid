<template>
  <div>
    <br />
    <hr>
    <hr>
    <br />
    <h2> Reference Guide</h2>
    <br />
    <br />
    <b-button v-b-toggle.sidebar-1>Reference Guide</b-button>
    <b-sidebar id="sidebar-1" title="Reference Guide" shadow>
      <div class="px-3 py-2">
        <p>
          Here users will be able to find a how to guide, FAQ, and other things.
        </p>
        <ol>
          <li>How do I use the Risk Assessment Tool?</li>  
          <li>What is your data policy?</li>
        </ol>    
      </div>
    </b-sidebar>
    <hr>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'Guide'
  }
</script>

<style scoped>
ul, li{
  text-align: left;
}
</style>