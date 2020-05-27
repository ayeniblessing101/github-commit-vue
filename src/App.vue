<template>
  <div id="app">
    <GithubCommits />
  </div>
</template>

<script>
  import GithubCommits from '@/components/github-commits';
export default {
  name: 'App',
  components: { GithubCommits }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px;
}
</style>
