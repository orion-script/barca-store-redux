import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocuments,
} from "../utils/firebase";
// import { SHOP_DATA } from "../utils/db";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDocuments("categories", SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node,
};
