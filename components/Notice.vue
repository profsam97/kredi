<template>
  <v-container>
    <v-card class="card">
      <v-container class="card-main">
        <v-container class="card-main-img">
          <img src="~/assets/images/image-store.png" alt="">
        </v-container>
        <v-card-text class="card-main-text">
          Upload your photos according to the
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-container class="d-flex justify-space-between">
            <v-container tag="span" class="d-flex justify-start">
              <span class="u-color-green">Calendar</span>
              !
            </v-container>

            <v-icon class="u-color-green">
              mdi-arrow-right-circle
            </v-icon>
          </v-container>
        </v-card-actions>
      </v-container>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "AppNotice"
}
</script>

<style scoped lang="scss">
.card {
  margin-top: 120px;
  padding: 20px;
  &-main {
    background: $background-alt;
    border: 4px;
    position: relative;
    &-text {
      padding-top: 40px;
    }
    &-img {
      display: block;
      position: absolute;
      top: -90px;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
  &-actions{
    cursor: pointer;
  }
}
</style>
