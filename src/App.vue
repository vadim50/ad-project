<template>
    <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-navigation-drawer app temporary></v-navigation-drawer>
      <v-toolbar dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Add Aplication</v-toolbar-title>

      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn depressed large>Link One</v-btn>
          <v-btn depressed large>Link Two</v-btn>
          <v-btn depressed large>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>
     <!--  <router-view></router-view> -->
    </v-content>
  </v-card>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  
};
</script>
