<template>
  <div id="app">
    <h1>{{ msg }}</h1>
	<p>{{note}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      note: "changing this line won't causes changes",
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
