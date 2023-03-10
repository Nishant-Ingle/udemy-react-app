import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

export const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const {addItemsToCart} = useContext(CartContext);

  const addProductToCart = () => addItemsToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}> Add to cart </Button>
    </div>
  );
}