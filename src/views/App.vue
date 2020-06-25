<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/shopping-cart">
        Shopping Cart
      </router-link>
    </div>
    <b-jumbotron header="V-Shopping Cart" lead="A shopping cart with Vue.js" fluid />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: 600;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
