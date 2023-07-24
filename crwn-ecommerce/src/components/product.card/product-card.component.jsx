import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const clickHandler = () => {
    return;
  };

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonType="inverted" onClick={clickHandler}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
