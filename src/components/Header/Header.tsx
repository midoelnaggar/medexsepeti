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
      <div className={styles.center}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </div>
      <div className={styles.menu}>
        {menu.map((item, index) => {
          return (
            <div key={index} className={styles.firstLevel}>
              <Link
                className={styles.firstLevelLink}
                href={item.url}
                
                style={
                  item.color
                    ? {
                        backgroundColor: item.color,
                        color: "var(--tx2)",
                        borderColor: item.color,
                      }
                    : {}
                }
              >
                {item.title}
              </Link>

              {item.children ? (
                <div className={styles.subMenu}>
                  <div className={styles.start}>
                    {item.children.map((secondItem, index2) => {
                      return (
                        <div key={index2} className={styles.column}>
                          <Link
                            href={secondItem.url}
                            className={styles.secondLevel}
                          >
                            {secondItem.title}
                          </Link>
                          <div className={styles.thirdLevelContainer}>
                            {secondItem?.children ? (
                              <div className={styles.thirdLevel}>
                                {secondItem.children.map(
                                  (thirdItem, index3) => {
                                    return (
                                      <Link
                                        href={thirdItem.url}
                                        className={styles.thirdLevel}
                                        key={index3}
                                      >
                                        {thirdItem.title}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {item.images ? (
                    <div className={styles.end}>
                      {item.images.map((img, index) => (
                        <img key={index} src={img} alt="" />
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
