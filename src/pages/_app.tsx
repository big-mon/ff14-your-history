import type { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <NextNprogress color="rgb(139, 92, 246)" stopDelayMs={100} height={3} />

      <div className="bg-fixed bg-gradient-to-br from-black to-gray-900 font-serif text-lg text-gray-100 relative">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
