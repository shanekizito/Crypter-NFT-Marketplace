import React, { useState } from 'react';
import StyledButton from '../styled-button/StyledButton';
import { IconContext } from 'react-icons';
import { MdChevronRight, MdChevronLeft, MdCropSquare } from 'react-icons/md';
import { useTransition, animated, config } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import TextTransition, { presets } from 'react-text-transition';

const items: Record<string, any>[] = [
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
];

const ListingsSlider: React.FC = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // @ts-ignore
  const transitions = useTransition(activeIndex, {
    keys: null,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    onSwipedLeft: () => {
      if (activeIndex !== items.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    },
    onSwipedRight: () => {
      if (activeIndex !== 0) {
        setActiveIndex(activeIndex - 1)
      }
    }
  })

  return (
    <div className="container px-10 mx-auto grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,_1fr)_minmax(304px,352px)]">
      <div>
        <div className="relative overflow-hidden w-full h-96 md:h-full">
          { transitions((style, i) => {
            const image = items[i].image || ''

            return (
              <animated.div
                style={{
                  ...style,
                  backgroundImage: `url(${image})`
                }}
                className="h-full w-full rounded-xl absolute object-cover bg-cover bg-center bg-no-repeat will-change-auto cursor-pointer active:cursor-grabbing"
                { ...handlers }
              />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className="text-5xl md:text-7xl text-left mb-6 font-bold">
          <TextTransition
            text={ items[activeIndex].title }
            springConfig={ presets.gentle }
          />
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="flex flex-row items-center">
            <img
              src={ items[activeIndex].creator.image }
              alt=""
              className="w-12 h-12 rounded-full object-cover mr-2"
            />
            <div className="space-y-0.2">
              <p className="text-gray-500 text-xs">Creator</p>
              <p className="text-gray-800 font-semibold">{ items[activeIndex].creator.name }</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-12 h-12 rounded-full bg-green-500 mr-2 flex items-center justify-center text-white">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <MdCropSquare />
              </IconContext.Provider>
            </div>
            <div className="space-y-0.2">
              <p className="text-gray-500 text-xs">Instant Price</p>
              <p className="text-gray-800 font-semibold">{ Number(items[activeIndex].instantPrice).toFixed(2) } ETH</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-3xl p-5 text-center shadow-2xl lg:p-10 mb-10">
          <p className="font-semibold">Current Bid</p>
          <p className="text-3xl lg:text-6xl font-semibold mb-2">
            { Number(items[activeIndex].bid).toFixed(2) } ETH
          </p>
          <p className="text-gray-500 text-1xl lg:text-2xl font-bold mb-8">
            ${ Number(items[activeIndex].value).toFixed(2) }
          </p>
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

        <section className="flex items-center justify-center mt-10 md:justify-start">
          <StyledButton
            rounded
            outlined
            icon
            variant="secondary"
            className="mr-3"
            disabled={activeIndex === 0}
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
            disabled={activeIndex === items.length -1}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <MdChevronRight />
            </IconContext.Provider>
          </StyledButton>
        </section>
      </div>
    </div>
  );
};

export default ListingsSlider;
