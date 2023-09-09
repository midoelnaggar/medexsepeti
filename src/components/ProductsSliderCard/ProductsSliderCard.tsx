import styles from "./ProductsSliderCard.module.scss";
import { product } from "../../../custom";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  product: product;
};

const ProductsSliderCard = ({ product }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.ProductsSliderCard}>
      <div className={styles.imageContainer}>
        <div className={styles.tag}>
          <span>{product.tag}</span>
        </div>
        <img
          src={product.imgUrl}
          alt={`product-image`}
          onClick={() => router.push(`/`)}
        />
      </div>
      <div className={styles.details}>
        <Link href={`/`} className={styles.title}>
          {product.title.toLowerCase()}
        </Link>
        <div className={styles.descAndPrice}>
          <div className={styles.desc}>{product.description}</div>
          <div className={styles.price}>{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSliderCard;
