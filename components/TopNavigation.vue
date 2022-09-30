<template>
  <v-app-bar
    height="120px"
    :clipped-left="isClipped"
    fixed
    app
 >
    <v-container tag="div" class="my-6">
      <v-btn
        v-if="!isDrawerOpen"
        class="u-color-green"
        icon
        @click="toggleShowDrawer"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-toolbar-title class="text-h4 toolbar-head" v-text="title" />
    </v-container>
    <v-tabs>
      <v-tab class="">
        Feed
      </v-tab>
      <v-tab>
        Edit
      </v-tab>
    </v-tabs>



    <v-container>
      <SearchBar />
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from './SearchBar'

export default {
  name: "TopNavigation",
  components: {SearchBar},
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data(){
    return {
      searchVal: '',
      isSearching: false,
    }
  },
  computed: {
    ...mapGetters({
      isDrawerOpen: 'base/getDrawerState',
      isClipped: 'base/getClippedState'
    })
  },
  methods: {
    toggleShowDrawer (){
      this.$store.commit('base/toggleIsDrawerOpen')
    }
  }
}
</script>

<style lang="scss">
.toolbar-head {
  font-size: 24px;
}
.v-tab.v-tab {
  color: white;
  font-weight: 600;
  font-size: 18px;
  text-transform: none;
  caret-color: $green;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet{
  background-color: $background;
}
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: white;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
  border-bottom: 1px solid rgba($white, 0.12);
}
</style>
