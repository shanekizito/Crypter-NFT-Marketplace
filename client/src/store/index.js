import { configureStore } from '@reduxjs/toolkit'

// Reducers
import assetsReducer from './reducers/assetsReducer'

const store = configureStore({
  reducer: {
    assets: assetsReducer
  }
})

export default store
