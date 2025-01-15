import Image from "next/image";
import ScrollToButtonButton from "./scroll-to-top-button";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import logo from "../public/logo-mini.png";
// import logo from "../public/logoFooter.png";
export default function FooterSection({ mainMenu }) {
  const { t } = useTranslation("common");
  const links = mainMenu.map((link) => ({
    ...link,
  }));
  const showChat = () => {
    _MEIQIA("showPanel");
  };
  const legal = [
    {
      label: t("legal_statement"),
      url: "/article/legal-statement",
    },
    {
      label: t("integrity_violation"),
      url: "/article/integrity-violation",
    },
    {
      label: t("money_laundering"),
      url: "/article/money-laundering",
    },
    {
      label: t("law_enforcement"),
      url: "/article/law-enforcement",
    },
  ];
  const agrement = [
    // {
    //   label: "Tuyên bố miễn trừ",
    //   url: "/article/disclaimer",
    // },
    {
      label: t("client_agreement"),
      url: "/article/client-agreement",
    },
    {
      label: t("partner_agreement"),
      url: "/article/partner-agreement",
    },
    // {
    //   label: "Điều khoản bảo mật",
    //   url: "/article/policy",
    // },
    {
      label: t("general_risk_disclosure"),
      url: "/article/general-risk-disclosure",
    },
    {
      label: t("terms_of_personal_data_processing"),
      url: "/article/terms-of-personal-data-processing",
    },
    // {
    //   label: "Thỏa thuận hợp đồng",
    //   url: "/article/contract-agreement",
    // },
  ];
  const support = [
    {
      label: "Faq",
      url: "/faq",
    },
  ];
  return (
    <>
      <footer className="py-10 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0 w-96">
              {/* <img
                alt="RoboForex logo"
                className="mb-4"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/tzYLipv6qdIeBaIeWlcNRBuAnmXWNDSmffwHTzfP2fdPmjGeJA.jpg"
                width="100"
              /> */}
              <Image src={logo} alt="Logo" width={45} height={45} />
              <p className="text-lg font-semibold mb-2 ">{t("footer_title")}</p>
              <p className="text-sm ">{t("footer_desc")}</p>
              <div className="flex space-x-4 mt-4">
                <i className="fab fa-telegram fa-lg"></i>
                <i className="fab fa-xing fa-lg"></i>
                <i className="fab fa-facebook fa-lg"></i>
                <i className="fab fa-instagram fa-lg"></i>
                <i className="fab fa-medium fa-lg"></i>
                <i className="fas fa-envelope fa-lg"></i>
                <i className="fab fa-reddit fa-lg"></i>
              </div>
            </div>
            <div className="flex flex-wrap justify-between w-full md:w-auto">
              <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-8">
                <h3 className="font-semibold mb-4 ">{t("information")}</h3>
                <ul>
                  {mainMenu?.map((item) => (
                    <li className="mb-2" key={item?.label}>
                      <Link className="hover:underline" href={item?.url}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-8">
                <h3 className="font-semibold mb-4 ">{t("legal")}</h3>
                <ul>
                  {legal?.map((item) => (
                    <li className="mb-2" key={item?.label}>
                      <Link className="hover:underline" href={item?.url}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-8">
                <h3 className="font-semibold mb-4 ">{t("agreement")}</h3>
                <ul>
                  {agrement?.map((item) => (
                    <li className="mb-2" key={item?.label}>
                      <a className="hover:underline" href={item?.url}>
                        {item?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-8">
                <h3 className="font-semibold mb-4 ">{t("support")}</h3>
                <ul>
                  {support?.map((item) => (
                    <li className="mb-2" key={item?.label}>
                      <a className="hover:underline" href={item?.url}>
                        {item?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">
              © 2021-2024 RoboForex.com all rights reserved
            </p>
          </div>
        </div>
      </footer>
      <ScrollToButtonButton />
    </>
  );
}
