import React from 'react'
import { Link } from 'react-router-dom'
import { MdNotificationsNone, MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';
import StyledButton from '../styled-button/StyledButton';
import ResourceSearch from '../resource-search/ResourceSearch';

const Header: React.FC = () => {
  return (
    <header
      className="flex flex-row justify-between items-center p-8 lg:px-6 lg:py-5 border-b-2 border-gray-100"
    >
      <Link to="/" className="flex flex-row items-center">
        <p className="font-bold -ml-3">crypter</p>
      </Link>

      <div className="hidden md:flex justify-end items-center">
        <ResourceSearch
          placeholder="Search"
          className="mr-4 lg:mr-6"
          InputAdornment={<MdSearch />}
        />

        <StyledButton className="mr-4 lg:mr-6" icon variant="secondary">
          <IconContext.Provider value={{ size: "2em" }}>
            <MdNotificationsNone />
          </IconContext.Provider>
        </StyledButton>

        <StyledButton
          rounded
          className="mr-3"
          size="small"
        >
          Upload
        </StyledButton>

        <StyledButton
          rounded
          outlined
          variant="secondary"
          size="small"
        >
          Connect Wallet
        </StyledButton>
      </div>

      <button className="space-y-1 md:hidden">
        <div className="w-6 h-0.5 bg-gray-600" />
        <div className="w-6 h-0.5 bg-gray-600" />
      </button>
    </header>
  )
}

export default Header;
