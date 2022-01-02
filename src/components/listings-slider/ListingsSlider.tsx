import React, { useState } from 'react';
import StyledButton from '../styled-button/StyledButton';
import { IconContext } from 'react-icons';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

const items: Record<string, any>[] = [
  {
    title: 'Marco carrillo®',
    image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    creator: {
      image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
      name: 'Enrico Cole',
    },
    price: 3.5,
  },
  {
    title: 'Marco carrillo BRR',
    image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
    creator: {
      image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
      name: 'Enrico Cole',
    },
    price: 3.5,
  },
];

interface ListingsSliderItemProps {
  width: string | number;
}

const ListingsSliderItem: React.FC<ListingsSliderItemProps> = ({children, width}) => {
  return (
    <div
      className="listings-slider__item inline-flex items-center justify-center"
      style={{width}}
    >
      {children}
    </div>
  );
};

const ListingsSlider: React.FC = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container px-10 mx-auto grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,_1fr)_minmax(304px,352px)]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          alt=""
          className="object-cover rounded-2xl"
        />
      </div>
      <div>
        <h3 className="text-5xl md:text-7xl text-left mb-6 font-bold">
          Marco carrillo®
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="flex flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
              alt=""
              className="w-12 h-12 rounded-full object-cover mr-2"
            />
            <div className="space-y-0.2">
              <p className="text-gray-500 text-xs">Creator</p>
              <p className="text-gray-800 font-semibold">Enrico Cole</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
              alt=""
              className="w-12 h-12 rounded-full object-cover mr-2"
            />
            <div className="space-y-0.2">
              <p className="text-gray-500 text-xs">Instant Price</p>
              <p className="text-gray-800 font-semibold">3.5 ETH</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-3xl p-5 text-center shadow-2xl lg:p-10 mb-10">
          <p className="font-semibold">Current Bid</p>
          <p className="text-3xl lg:text-6xl font-semibold mb-2">1.00 ETH</p>
          <p className="text-gray-500 text-1xl lg:text-2xl font-bold mb-8">$3,618.36</p>
          <p className="text-black font-semibold mb-2">Auction ending in</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-semibold">19</p>
              <p className="text-gray-500 font-semibold">Hrs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-semibold">24</p>
              <p className="text-gray-500 font-semibold">Mins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-semibold">19</p>
              <p className="text-gray-500 font-semibold">Secs</p>
            </div>
          </div>
        </div>
        <StyledButton
          variant="primary"
          rounded
          className="w-full py-2 mb-2"
        >
          Place a bid
        </StyledButton>
        <StyledButton
          variant="secondary"
          outlined
          rounded
          className="w-full py-2"
        >
          View item
        </StyledButton>

        <StyledButton
          rounded
          outlined
          icon
          variant="secondary"
          className="mr-3 mt-10"
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <MdChevronLeft />
          </IconContext.Provider>
        </StyledButton>
        <StyledButton
          variant="secondary"
          rounded
          icon
          outlined
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <MdChevronRight />
          </IconContext.Provider>
        </StyledButton>
      </div>
    </div>
  );
};

export default ListingsSlider;
