import { Ubuntu } from "next/font/google";
// My Assets:
import { LinkType } from "@/types";

export const PUB_GOOGLE_FONTS_UBUNTU = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const PUB_LINK_AUTHOR: LinkType = {
  name: "Vinícius Cabral",
  href: "https://github.com/vini-cabral/",
};

export const PUB_LINK_REPO: LinkType = {
  name: "Boilerplate Dark/Light - NextJS",
  href: "https://github.com/vini-cabral/boilerplate-darklight-nextjs",
};

export const PUB_APP_ROUTES: LinkType[] = [
  {
    name: "Iníco",
    href: "/",
  },
  {
    name: "Sobre",
    href: "/about",
  },
];
