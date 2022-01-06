import { createSlice } from '@reduxjs/toolkit'

const fakeAssets = [
  {
    id: 0,
    title: 'Marco carrillo®',
    image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    creator: {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      name: 'Enrico Cole',
    },
    bid: 1.00,
    instantPrice: 3.5,
    value: 3618.36,
  },
  {
    id: 1,
    title: 'the creator network®',
    image: 'https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    creator: {
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2199&q=80',
      name: 'Ioanna Giannikopolous',
    },
    instantPrice: 6,
    value: 7136.72,
    bid: 2.00
  },
]

export const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    addAssets: (state, action) => {
      state.assets = state.assets.concat(action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { addAssets, setLoading } = assetsSlice.actions

export const asyncFetchAssets = () => {
  return async dispatch => {
    console.log('hit.')
    dispatch(setLoading(true))
    await setTimeout(3000)
    console.log('hit.')
    dispatch(addAssets(fakeAssets))
    dispatch(setLoading(false))
  }
}

export default assetsSlice.reducer
