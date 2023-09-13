import styles from "./ProductsSlider.module.scss";
import { product } from "../../../custom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsSliderCard from "../ProductsSliderCard/ProductsSliderCard";
import {  Navigation} from "swiper/modules";

type Props = {
  title: string;
  products: product[];
  productsPerView: number;
  max: number;
};

const ProductsSlider = ({ title, products, productsPerView, max }: Props) => {
  return (
    <div className={styles.ProductsSlider} style={{width:`${productsPerView*240}px`}}>
      <h1>{title}</h1>
      <Swiper
        className={styles.swiper}
        slidesPerView={productsPerView}
        navigation={{ enabled: true }}
        modules={[Navigation]}
      >
        {products.slice(0,max).map((product, index) => {
          return (
            <SwiperSlide className={styles.slide} key={index}>
              <ProductsSliderCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
