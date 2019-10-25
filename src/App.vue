<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/shopping-cart">Shopping Cart</router-link>
    </div>
    <b-jumbotron header="V-Shopping Cart" lead="A shopping cart with Vue.js" fluid>
    </b-jumbotron>
    <container>
      <template v-slot:content>
        <router-view></router-view>
      </template>
    </container>
  </div>
</template>

<script>
import Container from '@/views/Container/Container'

export default {
  name: 'App',
  components: {
    'container': Container
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
