<template>
  <TabMenu :model="items" />
  <router-view></router-view>
</template>


<script>
  import TabMenu from 'primevue/tabmenu';

  export default {
    components: {
      TabMenu
    },
    data() {
      return {
        items: [
                  {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                  {label: 'About', icon: 'pi pi-fw pi-calendar', to: '/about'},
                  {label: 'Roles', icon: 'pi pi-fw pi-calendar', to: '/roles'},

              ]
      }
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

