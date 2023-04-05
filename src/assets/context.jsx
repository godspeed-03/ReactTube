import React, { createContext, useEffect, useState } from "react";

import { fetchAPIData } from "./api";

export const Context = createContext();

export const Appcontext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategory, setSelectCategory] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);
  

  useEffect(() => {
    fetchSelectedCategory(selectCategory);
  }, [selectCategory]);

  const fetchSelectedCategory = (query) => {
    setLoading(true);
    fetchAPIData(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResult(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
