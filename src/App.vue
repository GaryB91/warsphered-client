<template>
  <v-app>
    <v-app-bar color="grey-lighten-2" density="compact" app>
      <v-app-bar-title>Warsphered</v-app-bar-title>
    </v-app-bar>
    <v-main>
       <v-container fluid>
         <router-view />
       </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
