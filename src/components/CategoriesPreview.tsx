import React, { FC, Fragment } from "react";
import ProductCard from "./ProductCard";
import ContainerLayout from "../Layouts/ContainerLayout";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { CategoryItem } from "../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const linkClassName = title === "coaches" ? "pt-20" : "pt-5";

  console.log(products);
  return (
    <Fragment>
      <Navbar />
      <ContainerLayout>
        <div className="w-11/12 md:w-full h-auto m-auto md:m-0 flex flex-col mb-[30px] pb-5">
          <h2 className={linkClassName}>
            <Link className="text-[28px] mb-[25px] cursor-pointer" to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[20px]">
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </ContainerLayout>
    </Fragment>
  );
};

export default CategoryPreview;
