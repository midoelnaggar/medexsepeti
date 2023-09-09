import Link from "next/link";
import Logo from "../ui/icons/Logo";
import styles from "./Header.module.scss";
import { menu } from "../../../custom";

type Props = {
  menu: menu;
};

const Header = ({ menu }: Props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.menu}>
        {menu.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
