<template>
  <v-container>
    <TopNavigation
      :title="title"
    />
    <v-container ref="imageContainer" class="image__container">
      <v-container
        v-for="eachItem in [...Array(gridCount).keys()]" :key="eachItem"
        :class="`grid-${eachItem}`"
      >

        <v-container
          v-for="(image, index) in [...Array(gridCount[0]).keys()]"
          :key="index"
          class="image__single"
        >
          <v-container
            v-for="(eachImage, index2) in gridImages[eachItem]"
            :key="index2"
          >

            <v-container
              v-if="eachImage"
              class="py-3"
            >
              <SingleImage
                :image-details="eachImage"
              />
            </v-container>
          </v-container>
        </v-container>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import SingleImage from "../components/SingleImage";
import TopNavigation from "../components/TopNavigation";
export default {
  name: 'IndexPage',
  components: {
    TopNavigation,
    SingleImage
  },
  data(){
    return {
      imageContainerWidth: 0,
      gridCount: 1,
      title: ''
    }
  },
  computed: {
    gridImages() {
      const imageDataArr = [];
      for (let i=0; i < this.gridCount; i++) imageDataArr.push([]);
      for(let i = 0; i < this.imageData.length; i+=this.gridCount) {
        let j = 0;
        while( j < this.gridCount){
          imageDataArr[j].push(this.imageData[i+j])
          j++
        }
      }
      return imageDataArr;
    },
    ...mapGetters({
      isDrawerOpen: 'base/getImageData',
      isClipped: 'base/getSearchTerm',
      imageData: 'base/getImageData',
      searchTerm: 'base/getSearchTerm'
    })
  },
  beforeMount() {
    window.addEventListener("resize", this.getWidth);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.getWidth);
    window.removeEventListener('scroll', this.handleScroll);
  },
  async mounted() {
    this.getWidth();
    if(this.imageData.length === 0) await this.$store.dispatch('base/getImages')
  },
  methods: {
    getWidth(){
      this.imageContainerWidth = this.$refs.imageContainer.clientWidth
      this.gridCount = Math.floor(this.imageContainerWidth/325)
    },
    handleScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-100) {
        if(this.searchTerm === ''){
          this.$store.dispatch('base/getMoreImages')
        } else {
          this.$store.dispatch('base/searchMoreImages')
        }

      }
    },
  }
}
</script>

<style scoped lang="scss">
.image__container {
  display: grid;
  grid-template-columns: repeat(10, 300px);
  grid-gap: 25px;
  grid-auto-flow: dense;
}
.image__single {
  display: inline-block;
  &.grid-0 {
    grid-column-start: 1;
  }
  &.grid-1 {
    grid-column-start: 2;
  }
  &.grid-2 {
    grid-column-start: 3;
  }
  &.grid-4 {
    grid-column-start: 4;
  }
}
</style>
