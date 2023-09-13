import Header from "@/components/Header/Header";
import styles from "./DefaultLayout.module.scss";
import { menu } from "../../../custom";

type Props = {
  children: React.ReactNode;
  menu: menu;
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
