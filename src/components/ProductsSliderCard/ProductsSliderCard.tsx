import styles from "./ProductsSliderCard.module.scss";
import { product, wishlistInitialState } from "../../../custom";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import RatingStars from "../RatingStars/RatingStars";
import FilledHeartIcon from "../ui/icons/FilledHeartIcon";
import EmptyHeartIcon from "../ui/icons/EmptyHeartIcon";
import { addToWishlist, removeFromWishlist } from "@/redux/store";

type Props = {
  product: product;
};

interface RootState {
  wishlist: wishlistInitialState;
}

const ProductsSliderCard = ({ product }: Props) => {
  const { items: wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleHeartClick = () => {
    if (wishlistItems.includes(product.title)) {
      dispatch(removeFromWishlist(product.title));
    } else {
      dispatch(addToWishlist(product.title));
    }
  };
  return (
    <div className={styles.ProductsSliderCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.imgUrl}
          alt={`product-image`}
          onClick={() => router.push(`/`)}
        />
        <button className={styles.wishlistBtn} onClick={handleHeartClick}>
          {wishlistItems.includes(product.title) ? (
            <FilledHeartIcon />
          ) : (
            <EmptyHeartIcon />
          )}
        </button>
      </div>
      <div className={styles.details}>
        <RatingStars />
        <div className={styles.descAndPrice}>
          <div className={styles.desc}>{product.description}</div>
          <div className={styles.price}>{product.price}</div>
        </div>
        <div className={styles.tag}>
          {product.tag == "normal" ? null : <span>{product.tag}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductsSliderCard;
