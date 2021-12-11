<template>
  <header>
    <router-link to="/posts">Posts</router-link>
  </header>
  <article class="main">
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
  margin: 30px 15px;
}

body {
  max-width: 1920px;
  margin: 0 auto;
}

.main {
  margin: 50px 0;
}
</style>
