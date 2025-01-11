import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import MainMenu from "./main-menu/main-menu";
import Link from "next/link";
import logo from "../public/logo-mini.png";
export default function HeaderSection({ mainMenu }) {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarAreaEl = useRef(null);

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  return (
    <header className="header">
      <div
        ref={navbarAreaEl}
        className={`navbar-area 
          ${isNavbarSticky ? "sticky" : "sticky"}
          `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link
                  className="navbar-brand"
                  style={{ alignItems: "center" }}
                  href="/#"
                >
                  <Image
                    src={logo}
                    alt="Logo"
                    width={45}
                    height={45}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  {/* <h3>Exness</h3> */}
                </Link>
                <MainMenu mainMenuLinks={mainMenu} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
