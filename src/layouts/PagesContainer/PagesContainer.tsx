import useWindowSize from "@/hooks/useWindowSize";
import styles from "./PagesContainer.module.scss";

type Props = {
  children: React.ReactNode;
};

const PagesContainer = ({ children }: Props) => {
  const { width, height } = useWindowSize();

  return (
    <div
      className={styles.PagesContainer}
      style={{
        scale: (width / 1920).toString(),
        minHeight: height * (1920 / width),
      }}
    >
      {children}
    </div>
  );
};

export default PagesContainer;
