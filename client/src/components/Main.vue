<template>
<div>
<div>
	<br />
	<h2>Data as of: {{ new Date().toLocaleDateString() }}</h2>
	<img :src="require('../assets/graph.svg')" :width="800" :padding-bottom="25" />
</div>

<div>
<br />
<h2>Your Risk Assessment</h2>
<br />
  <b-card-group deck>
    <b-card bg-variant="light" title="Risk Status" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
  <br />

  <button type="button" class="btn btn-secondary btn-lg">Button Example</button>
  <br />
</div>
</div>

</template>

<script>

  export default {
    name: 'Main'
  }
</script>