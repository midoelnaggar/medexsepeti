import Head from "next/head";
import styles from "./Home.module.scss";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { home, menu } from "../../custom";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";

type homeProps = {
  menu: menu;
  home: home;
};

export const getServerSideProps = async () => {
  const menu = await axios.get("http://localhost:3000/api/menu");
  const home = await axios.get("http://localhost:3000/api/home");
  return {
    props: {
      menu: menu.data,
      home: home.data,
    },
  };
};

export default function Home({ menu, home }: homeProps) {
  return (
    <DefaultLayout menu={menu}>
      <Head>
        <title>MedexSepeti- Endodontic</title>
        <meta name="description" content="MedexSepeti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.sliderSection}>
          <Swiper
            className={styles.slider}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {home.slider.map((item, index) => {
              return (
                <SwiperSlide key={index} className={styles.slide}>
                  <Link href={item.url}>
                    <img src={item.imgUrl} alt={"slider"} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className={styles.bestSellingSection}>
          <ProductsSlider
            title="Best Selling"
            products={home.bestSelling}
            productsPerView={5}
            max={9}
          />
        </section>
      </main>
    </DefaultLayout>
  );
}
