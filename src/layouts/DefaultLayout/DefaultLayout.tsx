import Header from "@/components/Header/Header";
import styles from "./DefaultLayout.module.scss";

type Props = {
  children: React.ReactNode;
  menu: { title: string; url: string }[];
};

const DefaultLayout = ({ children,menu }: Props) => {
  return (
    <div className={styles.DefaultLayout}>
      <Header menu={menu} />
      {children}
    </div>
  );
};

export default DefaultLayout;
