import Link from "next/link";
import { BsSuitHeartFill } from "react-icons/bs";
// My Assets:
import { StyledFooter } from "./styles";
import styles from "@/templates/Footer/styles.module.sass";
import {
  PUB_GOOGLE_FONTS_UBUNTU as googleFonts,
  PUB_LINK_AUTHOR,
  PUB_LINK_REPO,
} from "@/env";

export default function Footer() {
  return (
    <StyledFooter className={`${styles["footer"]} ${googleFonts.className}`}>
      <p>
        Baixe o projeto:{" "}
        <Link href={PUB_LINK_REPO.href} target={"_blank"}>
          {PUB_LINK_REPO.name}
        </Link>
      </p>
      <p>
        Desenvolvido com{" "}
        <em>
          <BsSuitHeartFill />
        </em>{" "}
        por{" "}
        <Link href={PUB_LINK_AUTHOR.href} target={"_blank"}>
          <cite>{PUB_LINK_AUTHOR.name}</cite>
        </Link>
      </p>
    </StyledFooter>
  );
}
