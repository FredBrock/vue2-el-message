<template>
  <div id="app">
    <button @click="handleClick">click message !</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleClick() {
      this.$message("custom message");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
button {
  margin-top: 30%;
}
</style>
