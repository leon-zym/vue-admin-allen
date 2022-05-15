<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="less">
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
