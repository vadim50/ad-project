<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link
        v-for="link of links"
        :key="link.title"
        :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!------------->
        <v-list-item 
          link
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!------------->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn depressed
        color="primary"
        x-large
        v-for="link in links"
        :key="link.title"
        v-bind:to="link.url"
        >
        <v-icon class="material-icons" left>{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
      <!-------->
       <v-btn depressed
        color="primary"
        x-large
        @click="onLogout"
        v-if="isUserLoggedIn"
        >
        <v-icon class="material-icons" left>exit_to_app</v-icon>
        Logout
      </v-btn>
      <!--------->
    </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
<template v-if="error">
    <v-snackbar
      top
      absolute
      color="error"
      :multi-line="true"
      :timeout="5000"
      @input="closeError"
      :value="true"
    >
      {{ error }}
      <v-btn
        dark
        @click.native="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>
    <v-footer
      color="primary"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }} mastertoy50@gmail.com</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    name: 'App',
    data: () => ({
      drawer: null,
    }),
    computed: {
      error () {
        return this.$store.getters.error
      },
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
      if(this.isUserLoggedIn){
        return [
          {title: 'Orders',      icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad',      icon: 'bug_report',      url: '/new'},
          {title: 'My ads',      icon: 'list',            url: '/list'},
        ]
      }
      return [
        {title: 'Login',       icon: 'lock',            url: '/login'},
        {title: 'Registation', icon: 'face',            url: '/registration'},
      ]
    }
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      },
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    },
  }
</script>
<style scoped>
  a.v-btn, a.v-list-item{
    text-decoration: none;
  }
  .pointer{
    cursor: pointer;
  }
</style>