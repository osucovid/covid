<template>
<div>
	<br />
	<h2>Data as of: {{ new Date().toLocaleDateString() }}</h2>
	<img :src="require('../assets/graph.svg')" :width="800" :padding-bottom="25" />
</div>

</template>

<script>

  export default {
    name: 'Main'
  }
</script>