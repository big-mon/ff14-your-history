import Head from "next/head";
import { Hero } from "../organisms/Hero";
import { Footer } from "../organisms/Footer";

export const Template = () => {
  return (
    <>
      <Head>
        <title>Dreams of Titania | FF14 Character History</title>
      </Head>

      <Hero />
      <Footer isSticky={true} />
    </>
  );
};
