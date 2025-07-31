import styles from "./index.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface ShinyTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ShinyText: React.FC<ShinyTextProps> = ({ children }) => {
  return <div className={styles.shiny}>{children}</div>;
};
