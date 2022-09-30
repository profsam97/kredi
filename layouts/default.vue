<template>
  <v-app dark>
    <SideNavigation />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNavigation from "../components/SideNavigation";
export default {
  name: 'DefaultLayout',
  components: { SideNavigation},
  data() {
    return {
      title: 'Dashboard',
      clipped: false,
      drawer: true,
    }
  },
}
</script>

<style lang="scss">
@import "~/assets/scss/main.scss";
</style>
