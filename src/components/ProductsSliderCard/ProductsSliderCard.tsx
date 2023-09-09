import styles from "./ProductsSliderCard.module.scss";
import { product } from "../../../custom";

type Props = {
  product: product;
};

const ProductsSliderCard = ({ product }: Props) => {
  return (
    <div className={styles.ProductsSliderCard}>
      <h1> {product.title} </h1>
    </div>
  );
};

export default ProductsSliderCard;
