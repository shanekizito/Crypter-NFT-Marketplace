import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledButton from '../components/styled-button/StyledButton'
import ListingsSlider from '../components/listings-slider/ListingsSlider'
import { asyncFetchAssets } from '../store/reducers/assetsReducer';
import store from '../store'

const Home: React.FC = () => {
  const assets = useSelector((state: ReturnType<typeof store.getState>) => state.assets.data)
  const loading = useSelector((state: ReturnType<typeof store.getState>) => state.assets.loading)

  useEffect(() => {
    useDispatch(asyncFetchAssets())
  }, [])

  return (
    <>
      <div className="py-28 px-10 text-center">
        <p className="uppercase text-gray-600 font-bold mb-1">Create, explore, & collect digital art NFTs.</p>
        <h1 className="text-5xl mb-8 font-bold">The new creative economy.</h1>
        <StyledButton
          outlined
          rounded
          size="small"
          variant="secondary"
        >
          Start your search
        </StyledButton>
      </div>

      <section className="mb-10">
        <ListingsSlider loading={loading} items={assets} />
      </section>
    </>
  )
};

export default Home
