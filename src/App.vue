<template>
  <TheHeader :message="propMessage" />
  <article class="main">
    <router-view :message="propMessage" />
  </article>
  <TheFooter :message="propMessage" />
</template>

<script>
export default {
  data() {
    return {
      propMessage: "Hello from ",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  max-width: 1920px;
  margin: 0 auto;
}

.main {
  margin: 50px 0;
}

header {
  height: 50px;
  width: 100%;
  background-color: #2c3e50;
  padding: 10px 0;
}

footer {
  height: 20px;
  width: 100%;

  p {
    background-color: #d7cfcf;
    text-align: center;
    margin: 0;
    padding: 0;
  }
}
</style>
