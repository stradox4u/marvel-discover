import { createStore } from "vuex";

import characterModule from './characterTestModule'
import comicModule from './comicTestModule'
import searchModule from './searchTestModule'

const store = createStore({
  state() {
    return {

    }
  },
  modules: {
    character: characterModule,
    comic: comicModule,
    search: searchModule,
  }
})

export default store