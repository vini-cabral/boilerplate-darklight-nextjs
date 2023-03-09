import Head from "next/head";
// My Assets:
import styles from "@/styles/pages/About.module.sass";
import { PUB_GOOGLE_FONTS_UBUNTU as googleFonts } from "@/env";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta
          name="description"
          content="Boilerplate Dark & Light - NextJS, página sobre nós"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]} ${googleFonts.className}`}>
        <section>
          <h1>Quem somos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi dignissimos optio illum. Suscipit in sequi dignissimos
            consequatur odio non quod doloremque optio odit, molestiae aperiam?
            Vitae culpa omnis voluptatum.
          </p>
        </section>
      </main>
    </>
  );
}
