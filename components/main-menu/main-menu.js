import { useEffect, useState, useRef } from "react";

import MainMenuLink from "./main-menu-link";
import LocaleSwitch from "../locale-switch";

export default function ManiMenu({ mainMenuLinks }) {
  const [activeMenuLink, setActiveMenuLink] = useState(
    mainMenuLinks.length ? mainMenuLinks[0].url : ""
  );

  function highlightLinks() {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    sections.forEach((currLink) => {
      const val = currLink.getAttribute("href").slice(1);
      if (val[0] !== "#") {
        return;
      }
      const refElement = document.querySelector(val);

      if (!refElement) {
        return;
      }

      const scrollTopMinus = scrollPos + 73;

      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        setActiveMenuLink(val);
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", highlightLinks);

    return () => {
      window.removeEventListener("scroll", highlightLinks);
    };
  }, []);
  const [isMenuActive, setMenuActive] = useState(false);
  const menuLinksEl = useRef(null);
  //   useEffect(() => {
  //     if (!isMenuActive) menuLinksEl.current.classList.remove("show");
  //   }, [isMenuActive]);

  function inactivateMenu() {
    setMenuActive(false);
    // if (menuLinksEl.current) {
    //   menuLinksEl.current.classList.remove("show");
    // }
  }

  return (
    <>
      <button
        className={`navbar-toggler ${isMenuActive ? "active" : ""}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setMenuActive(!isMenuActive)}
        style={{ border: "none" }}
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      {/* <div
        className="collapse navbar-collapse sub-menu-bar show"
        ref={menuLinksEl}
        id="navbarSupportedContent"
      >
        <div className="ms-auto">
          <ul id="nav" className="navbar-nav ms-auto">
            {mainMenuLinks.map((navLink) => (
              <MainMenuLink
                key={navLink.url}
                url={navLink.url}
                label={navLink.label}
                active={navLink.url === activeMenuLink}
                callbackOnClick={inactivateMenu}
              />
            ))}
          </ul>
        </div>
      </div> */}
      {isMenuActive ? (
        <div
          className="collapse navbar-collapse sub-menu-bar show"
          ref={menuLinksEl}
          id="navbarSupportedContent"
        >
          <div className="ms-auto">
            <ul id="nav" className="navbar-nav ms-auto">
              {mainMenuLinks.map((navLink) => (
                <MainMenuLink
                  key={navLink.url}
                  url={navLink.url}
                  label={navLink.label}
                  active={navLink.url === activeMenuLink}
                  callbackOnClick={inactivateMenu}
                />
              ))}
              <li>
                <LocaleSwitch />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="link-header">
          <div className="ms-auto">
            <ul id="nav" className="navbar-nav ms-auto">
              {mainMenuLinks.map((navLink) => (
                <MainMenuLink
                  key={navLink.url}
                  url={navLink.url}
                  label={navLink.label}
                  active={navLink.url === activeMenuLink}
                  callbackOnClick={inactivateMenu}
                />
              ))}
              <li>
                <LocaleSwitch />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
