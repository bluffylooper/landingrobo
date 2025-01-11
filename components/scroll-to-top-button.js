import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToButtonButton() {
  const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

  function toggleScrollTopButton() {
    setHasScrollToTopButton(
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTopButton);

    return () => {
      window.removeEventListener("scroll", toggleScrollTopButton);
    };
  }, []);

  const showChat = () => {
    _MEIQIA("showPanel");
  };

  return (
    <>
      {/* <button type="button" className="messenger " onClick={showChat}>
        <i className="lni lni-wechat"></i>
      </button> */}
      {hasScrollToTopButton && (
        <Link href="#" className="scroll-top btn-hover">
          <i className="lni lni-chevron-up"></i>
        </Link>
      )}
    </>
  );
}
