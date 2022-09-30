<template>
  <v-container class="single-image">
    <v-btn v-if="imageDetails.tags && imageDetails.tags[0]" class="subtitle-2 tag">{{ imageDetails.tags[0].title }}</v-btn>
    <v-container class="main">
      <img
        class="main-img"
        :src="imageDetails.urls.small"
        :alt="imageDetails.alt_description"
        @click="toggleShowFullImage"
      >
    </v-container>
    <v-container class="d-flex justify-space-between align-center extras">
      <v-container class="extras__info">
        <v-container class="subtitle-2">
          <v-container v-if="imageDetails.tags && imageDetails.tags[0]" tag="span" >
            {{ imageDetails.tags[0]?.title | capitalize }}
          </v-container>
            #{{ imageDetails.likes }}
        </v-container>
        <a :href="imageDetails.user.links.self" target="_blank" rel="noreferrer noopener">
          <v-container class="d-flex justify-start align-center">
            <img
              class="extras__info--img"
              :src="imageDetails.user.profile_image.small"
              :alt="imageDetails.user.username"
            >
            <v-container tag="span" class="extras__info--text-name">
              {{ imageDetails.user.name }}
            </v-container>
          </v-container>
        </a>
      </v-container>
      <a :href="imageDetails.urls.regular"   download>
        <v-icon class="u-color-green">mdi-tray-arrow-down</v-icon>
      </a>
    </v-container>
    <v-container v-if="showFullImage" class="full-image" @click.self="toggleShowFullImage">
      <v-btn icon class="close-btn" @click="toggleShowFullImage">
        <v-icon x-large>mdi-window-close</v-icon>
      </v-btn>
      <img
        :src="imageDetails.urls.regular"
        :alt="imageDetails.alt_description"
        class="full-image-img"
        @click="()=>{}"
      >
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SingleImage",
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    imageDetails: {
      type: Object,
      default: ()=>{}
    }
  },
  data(){
    return {
      showFullImage: false
    }
  },
  methods: {
    toggleShowFullImage(){
      this.showFullImage = !this.showFullImage;
    }
  }
}
</script>

<style scoped lang="scss">
.single-image {
  width: 300px;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  .main {
    &-img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      cursor: zoom-in;
    }
  }
  .tag {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    margin: 20px;
    background: rgba($background, 0.7);
    text-transform: capitalize;
  }
  .extras {
    position: absolute;
    bottom: 0;
    background: rgba($background, 0.7);
    padding: 20px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    &__info {
      padding: 0 15px;
      border-left: 3px solid $green;
      &--text {
        &-name {
          font-size: 12px;
          //color: rgba($white, 0.12);
          color: grey;
          font-weight: 600;
          padding-left: 10px;
        }
      }
      &--img {
        width: 16px;
        height: 16px;
        border-radius: 100%;
      }

    }
  }
  .full-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($background, 0.2);
    text-align: center;
    z-index: 100;
    &-img {
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto;
    }
    .close-btn {
      position: absolute;
      top: 30px;
      right: 30px
    }
  }

}

</style>
