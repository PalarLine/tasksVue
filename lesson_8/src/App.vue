<template>
  <nav>
    <router-link to="/">Task-1</router-link> |
    <router-link to="/task-2">Task-2</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">

nav {
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
