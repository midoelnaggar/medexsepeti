import Star from "../ui/icons/Star";
import styles from "./RatingStars.module.scss";

const RatingStars = () => {
  return (
    <div className={styles.RatingStars}>
      {Array.from({ length: 5 }, (value, index) => {
        return <Star key={index} />;
      })}
    </div>
  );
};

export default RatingStars;
