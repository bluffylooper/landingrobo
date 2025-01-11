import "@/styles/globals.css";
import { useEffect, useState } from "react";

import Router from "next/router";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import FooterSection from "@/components/footer-section";
import HeaderSection from "@/components/header-section";
import ScrollToButtonButton from "@/components/scroll-to-top-button";
import Preloader from "@/components/preloader";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/js/src/collapse.js";
import "@/css/lineicons.css";

import "@/css/tiny-slider.min.css";
import "@/css/main.css";

function MyApp({ Component, pageProps, mainMenu }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  console.log("🚀 ~ MyApp ~ router:", router.pathname);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
    import("bootstrap/js/src/collapse");
    // import("../lib/script");

    const showLoader = () => {
      setIsLoading(true);
    };

    const removeLoader = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", showLoader);
    Router.events.on("routeChangeComplete", removeLoader);
    Router.events.on("routeChangeError", removeLoader);

    return () => {
      Router.events.off("routeChangeStart", showLoader);
      Router.events.off("routeChangeComplete", removeLoader);
      Router.events.off("routeChangeError", removeLoader);
    };
  }, [router]);

  useEffect(() => {
    (function (a, b, c, d, e, j, s) {
      a[d] =
        a[d] ||
        function () {
          (a[d].a = a[d].a || []).push(arguments);
        };
      (j = b.createElement(c)), (s = b.getElementsByTagName(c)[0]);
      j.async = true;
      j.charset = "UTF-8";
      j.src = "https://static.meiqia.com/widget/loader.js";
      s.parentNode.insertBefore(j, s);
    })(window, document, "script", "_MEIQIA");
    _MEIQIA("entId", "ac089d73f6f2d45039ba4afc67348135");
    _MEIQIA("language", "vi");
    _MEIQIA("withoutBtn");
    _MEIQIA("getPanelVisibility", checkMessegePanel);
    // _MEIQIA("allSet", OpenPopup);
    const token = JSON.parse(localStorage.getItem("user"));
    let name = "";
    let id = "";
    if (token == undefined) {
      name = "Khách hàng vãng lai";
    } else {
      name = token.fullName;
      id = token.id;
    }

    _MEIQIA("metadata", {
      name: name + " (ID: " + id + ")",
      address: "idAccount: " + id,
    });
    // checkPopupCshk();
  }, []);

  const checkMessegePanel = (visibility) => {
    // if (visibility === "visible") {
    //   localStorage.setItem("chat", "on");
    // } else {
    //   localStorage.setItem("chat", "off");
    // }
  };

  const maindMenu = [
    { label: "Trang chủ", url: "/" },
    { label: "Về chúng tôi", url: "/#about" },
    { label: "Tính năng", url: "/#features" },
    { label: "Tải app", url: "/download" },
    { label: "Chính sách", url: "/policy" },
  ];

  const hideHeadderFooter = ["/android", "/ios"].includes(router.pathname);

  const pageLayout = (
    <>
      {hideHeadderFooter ? null : <HeaderSection mainMenu={maindMenu} />}
      <Component {...pageProps} />

      {hideHeadderFooter ? null : <FooterSection mainMenu={maindMenu} />}
    </>
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>RoboForex</title>
        <meta name="description" content="XTrading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/logo-mini.png" />
      </Head>

      {isLoading && <Preloader></Preloader>}

      {!isLoading && pageLayout}

      {/* <script src="../lib/script.js"></script> */}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
