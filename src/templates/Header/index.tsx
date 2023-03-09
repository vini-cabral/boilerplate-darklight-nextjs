import { StyledHeader } from "./styles";
import styles from "@/templates/Header/styles.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts, PUB_APP_ROUTES } from "@/env";
import { Navbar } from "..";

const Header = () => {
  return (
    <StyledHeader
      className={`${styles["header"]} ${googleFonts.className} shadow`}
    >
      <strong className={styles["header__logo"]}>Logo</strong>
      <Navbar paths={[...PUB_APP_ROUTES]} />
    </StyledHeader>
  );
};

export default Header;
