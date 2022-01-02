import React from 'react'
import StyledButton from '../components/styled-button/StyledButton'

const Home: React.FC = () => (
  <div className="py-28 px-10">
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
);

export default Home
