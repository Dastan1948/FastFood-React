import React, { createContext, useState } from 'react'

export const searchContext = createContext()

const SearchContextProvider = ({children}) => {
  const [searchValue, setSearchValue] = useState('')

  const value = {searchValue, setSearchValue}

  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContextProvider