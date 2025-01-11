import Link from "next/link";

export default function MainMenuLink({ url, label, active, callbackOnClick }) {
  return (
    <li className="nav-item" onClick={callbackOnClick}>
      <Link
        className={`page-scroll text-[#1378BF] ${active ? "active" : ""}`}
        href={`${url}`}
      >
        {label}
      </Link>
    </li>
  );
}
