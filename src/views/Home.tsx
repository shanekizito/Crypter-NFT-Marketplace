import React from 'react'
import StyledButton from '../components/styled-button/StyledButton'
import ListingsSlider from '../components/listings-slider/ListingsSlider'

const Home: React.FC = () => (
  <div>
    <div className="py-28 px-10 text-center">
      <p className="uppercase text-gray-600 font-semibold mb-4">Create, explore, & collect digital art NFTs.</p>
      <h1 className="text-6xl mb-10">The new creative economy.</h1>
      <StyledButton
        outlined
        rounded
        size="small"
        variant="secondary"
      >
        Start your search
      </StyledButton>
    </div>
    <ListingsSlider />
  </div>
);

export default Home
