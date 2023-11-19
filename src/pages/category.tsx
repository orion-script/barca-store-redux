import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContainerLayout from "../Layouts/ContainerLayout";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../store/categories/category.selector";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Navbar />
      <ContainerLayout>
        <h2 className="text-[38px] mb-[25px] text-center">
          {category.toUpperCase()}
        </h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-12 pb-5">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        )}
      </ContainerLayout>
    </Fragment>
  );
};

export default Category;
