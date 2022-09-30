<template>
  <v-card
    class="mx-auto custom-scroll"
  >
    <v-navigation-drawer
      v-if="isDrawerOpen"
      width="320"
      class="pa-0"
      fixed
      bottom
      app
    >
      <v-container class="d-flex flex-wrap justify px-8 -space-between fill-height">
        <v-container class="py-0">
          <v-container tag="div" class="pa-0">
            <v-container class="d-flex justify-space-between pa-0 align-center py-6">
              <v-container tag="span" class="text-h6">
                STGallery
              </v-container>
              <v-btn
                v-if="isDrawerOpen"
                class="u-color-green"
                icon
                @click="toggleShowDrawer"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-container>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-expansion-panels>
                  <v-expansion-panel class="transparent u-no-shadow" style="{box-shadow: none}">
                    <v-expansion-panel-header class="pa-0">
                      <v-list-item class="pa-0">
                        <v-list-item-action>
                          <v-icon color="green">mdi-menu</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title >Dashboard</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-list>
                        <v-list-item
                          v-for="(item, i) in dashboardMenuItems"
                          :key="i"
                          :to="item.to"
                          router
                          exact
                        >
                          <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title v-text="item.title" />
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-list-item>
              <v-divider class="mb-6"/>
              <v-list-item
                v-for="(item, i) in mainMenuItems"
                :key="i"
                :to="item.to"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-container>
        <v-container class="py-0  pb-15">
        <v-container class="py-0">
          <Notice />
        </v-container>
        <v-container class="py-0">
          <v-list>
            <v-list-item
              v-for="(item, i) in footerMenuItems"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
        <v-divider class="my-5" />
        <v-container class="py-0">
          <v-container class="d-flex justify-start">
            <v-avatar>
              <img src="~/assets/images/user-avatar.png" alt="Brooklyn">
            </v-avatar>
            <v-container class="ml-5">
              <v-container class="pl-2">
                Brooklyn
              </v-container>
              <v-container>
                <v-icon>
                  mdi-circle-small
                </v-icon>
                <v-container tag="span" class="subtitle-2">
                  Account Pro
                </v-container>
              </v-container>
            </v-container>
          </v-container>
        </v-container>
      </v-container>
      </v-container>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import Notice from "./Notice";
export default {
  name: "SideNavigation",
  components: {Notice},
  data(){
    return {
      dashboardMenuItems: [
        {
          icon: 'mdi-file-table-box-outline',
          title: 'Feed',
          to: '/',
        },{
          icon: 'mdi-square-edit-outline',
          title: 'Edit',
          to: '#',
        },{
          icon: 'mdi-magnify',
          title: 'Search',
          to: '#',
        },
      ],
      mainMenuItems: [
        {
          icon: 'mdi-compass',
          title: 'Explore',
          to: '#',
        },
        {
          icon: 'mdi-bookmark-box',
          title: 'Bookmark',
          to: '#',
        },
        {
          icon: 'mdi-download-box-outline',
          title: 'Download',
          to: '#',
        },
        {
          icon: 'mdi-checkbox-blank-badge',
          title: 'Notification',
          to: '#',
        },
      ],
      footerMenuItems: [
        {
          icon: 'mdi-cog',
          title: 'Settings',
          to: '#',
        },
        {
          icon: 'mdi-alert-circle-outline',
          title: 'Help',
          to: '#',
        },
      ]

    }
  },
  computed: {
    ...mapGetters({
      isDrawerOpen: 'base/getDrawerState',
    })
  },
  methods: {
    toggleShowDrawer (){
      this.$store.commit('base/toggleIsDrawerOpen')
    }
  }
}
</script>

<style scoped lang="scss">

.custom-scroll {
  // custom scrollbar styles
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba($white, 0.42);
    border-radius: 2.5px;
    border-radius: 2.5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba($white, 1);
  }

}
</style>
