export const namespaced = true

export const state = () => ({
  isClipped: false,
  isDrawerOpen: true,
  imageData: [],
  searchTerm: '',
  currentPage: 0,
  itemsPerPage: 15,
})

export const mutations = {
  toggleIsDrawerOpen (state) {
    state.isDrawerOpen = !state.isDrawerOpen;
  },
  toggleIsClipped (state) {
    state.isClipped = !state.isClipped;
  },
  setImageData (state, payload) {
    state.imageData = payload;
  },
  appendImageData (state, payload) {
    state.imageData = state.imageData.concat(payload)
  },
  setSearchTerm(state, payload){
    state.searchTerm = payload
  },
  setCurrentPage(state, payload){
    state.currentPage = payload
  },
}

export const actions = {
  async searchImage({ commit, state }, searchValue){
    commit('setSearchTerm', searchValue)
    commit('setCurrentPage', 0)
    const formattedSearchItem = encodeURI(searchValue)
    const searchUrl = `/search/photos?query=${formattedSearchItem}`;

    const data = await this.$axios.$get(`${searchUrl}&per_page=${state.itemsPerPage}&page=${state.currentPage}`);
    commit("setSearchTerm", searchValue)
    commit("setImageData", data.results)
    commit('setCurrentPage', state.currentPage+1)
  },

  async searchMoreImages({ commit, state }){
    const formattedSearchItem = encodeURI(state.searchTerm)
    const searchUrl = `/search/photos?query=${formattedSearchItem}`;

    const data = await this.$axios.$get(`${searchUrl}&per_page=${state.itemsPerPage}&page=${state.currentPage}`);
    commit("appendImageData", data.results)
  },

  async getImages({ commit, state }){
    commit('setSearchTerm', '')
    commit('setCurrentPage', 0)
    const data = await this.$axios.$get(`/photos?per_page=${state.itemsPerPage}&page=${state.currentPage}`);
    commit("setImageData", data)
    commit('setCurrentPage', state.currentPage+1);
  },
  async getMoreImages({ commit, state }){
    const data = await this.$axios.$get(`/photos?per_page=${state.itemsPerPage}&page=${state.currentPage}`);
    commit("appendImageData", data)
    commit('setCurrentPage', state.currentPage+1);
  },
}

export const getters = {
  getDrawerState (state) {
    return state.isDrawerOpen
  },
  getClippedState(state) {
    return state.isClipped
  },
  getImageData(state){
    return state.imageData
  },
  getSearchTerm(state){
    return state.searchTerm
  },
}
