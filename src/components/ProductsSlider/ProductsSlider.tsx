import Link from "next/link";
import styles from "./ProductsSlider.module.scss";
import { product } from "../../../custom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsSliderCard from "../ProductsSliderCard/ProductsSliderCard";

type Props = {
  title: string;
  products: product[];
  productsPerView: number;
  max: number;
};

const ProductsSlider = ({ title, products, productsPerView, max }: Props) => {
  return (
    <div className={styles.ProductsSlider}>
      <h1>{title}</h1>
      <Swiper slidesPerView={productsPerView}>
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductsSliderCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
