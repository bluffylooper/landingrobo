import React, { useEffect } from "react";
import QRCode from "qrcode";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Download() {
  const router = useRouter();
  function redirect() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      var userAgent = navigator.userAgent || window.opera;
      if (/Android/.test(userAgent)) {
        router.push("/android");
      } else {
        router.push("/ios");
      }
    }
  }
  useEffect(() => {
    redirect();
  }, [router]);

  useEffect(() => {
    const ios = document.getElementById("ios-qrcode");
    const android = document.getElementById("apk-qrcode");

    QRCode.toCanvas(
      ios,
      "itms-services://?action=download-manifest&amp;url=https://roboforex.trade/app.plist",
      { width: 200 }
    );
    QRCode.toCanvas(android, "https://roboforex.trade/app.apk", {
      width: 200,
    });
  }, []);

  return (
    <section id="blog-roll" className="mt-40 mb-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center">
              {/* <h2>All Blog Posts</h2>
            <ul className="breadcrumb-nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>All blog posts</li>
            </ul> */}
              <div>
                <div>
                  <div className="wrapper">
                    {/* <a href="#" className="logo">
                      <img src="./assets/images/tran.png" alt="photo" />
                    </a> */}
                    <div className="download" style={{ marginTop: "60px" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3 className="mb-20">QR App Store</h3>
                        <div className="scanning">
                          <canvas id="ios-qrcode"></canvas>
                        </div>
                        {/* <a
                          href="itms-services://?action=download-manifest&amp;url=https://infinasoftware.com/app.plist"
                          className="button"
                        >
                          <i className="fas fa-download"></i>
                          <span>Download for IOS</span>
                        </a> */}
                        <Link
                          href="/ios"
                          className="download-app-link w-inline-block pt-20"
                        >
                          <img
                            src="https://assets-global.website-files.com/617a6615e122ca12cc064abb/61b6d39a87715b30284506b8_apple-store.svg"
                            loading="lazy"
                            alt="Infina App IOS"
                            className="download-app"
                          />
                        </Link>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3 className="mb-20">QR Google Play</h3>
                        <div className="scanning">
                          <canvas id="apk-qrcode"></canvas>
                        </div>
                        {/* <a
                          href="https://infinasoftware.com/app.apk"
                          className="button"
                        >
                          <i className="fas fa-download"></i>
                          <span>Download for APK</span>
                        </a> */}
                        <Link
                          href="/android"
                          className="download-app-link w-inline-block pt-20"
                        >
                          <img
                            src="https://assets-global.website-files.com/617a6615e122ca12cc064abb/61b6d39a1b21f70df3d975b9_play-store.svg"
                            loading="lazy"
                            alt="Infina App Android"
                            className="download-app last home"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
