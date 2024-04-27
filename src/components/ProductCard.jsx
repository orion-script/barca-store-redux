import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/cartContext";
import Button, { BUTTON_TYPE_CLASSES } from "./button/button.component";

const ProductCard = ({ product }) => {
  console.log("PRODUCTS", product)
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const { removeItemFromCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  const removeProductToCart = () => removeItemFromCart(product);

  return (
    <div className="w-11/12 m-auto md:m-0 md:w-full flex flex-col h-[350px] items-center relative mb-10 border border-[#000] pb-5">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-[95%] inset-0 object-cover mb-[5px] hover:opacity-80"
      />
      <div className="w-full h-[5%] flex justify-between text-[18px] px-3">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={
          cartItems && cartItems.find((item) => item.id === product.id)
            ? removeProductToCart
            : addProductToCart
        }
        className="absolute w-[80%] opacity-70 top-[255px] hidden hover:opacity-90 hover:flex"
      >
        {cartItems && cartItems.find((item) => item.id === product.id)
          ? "Remove from cart"
          : "Add to cart"}
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
