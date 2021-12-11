<template>
  <header>
    <router-link to="/posts">Posts</router-link>
  </header>
  <article>
    <router-view />
  </article>
  <footer>Copy Mladen</footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
