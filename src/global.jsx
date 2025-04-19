import "@/styles";

import { Head } from "minista";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

export default function Global({ children, title, description }) {
  return (
    <>
      {/* prettier-ignore */}
      <Head htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>

      <div className="wrapper-page">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>

      <script defer src="/src/main.js"></script>
    </>
  );
}
