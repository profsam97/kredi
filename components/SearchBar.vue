<template>
  <v-container class="form">
    <v-container class="form__group">
      <div class="prepend__btn">
        <div class="prepend__btn-icon">
          <v-icon>mdi-magnify</v-icon>
        </div>
        <input
          v-model="searchValue"
          type="text"
          placeholder="Search"
          class="form__input  prepend__input"
          @keyup.enter="searchImage()"
        />
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  data(){
    return {
      searchValue: ''
    }
  },
  methods: {
    searchImage() {
      if(this.searchValue.trim() === '') {
        this.$store.dispatch('base/getImages', this.searchValue)

      };
      this.$store.dispatch('base/searchImage', this.searchValue)
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  max-width: 250px;
  &__group {
    position: relative;
  }
  &__input {
    color: $white;
    padding: .5rem 0.5rem .5rem;
    background-color: inherit;
    display: block;
    background: $background-alt;
    border-radius: 25px;
    &:focus {
      background-color: inherit;
      border: 1px solid #4982FF;
      outline: none;
    }

    &:disabled {
      background-color: inherit;
    }

    &::-webkit-input-placeholder {
      color: rgba($white, 0.5);
    }
  }
}
.prepend__btn {
  position: relative;
}
.prepend__input {
  width: 100%;
  padding-left: 35px;
}

.prepend__btn-icon {
  top: 0;
  left: 5px;
  position: absolute;
  margin-top: 0.5rem;
}
</style>
