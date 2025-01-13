import Image from "next/image";
import ScrollToButtonButton from "./scroll-to-top-button";
import Link from "next/link";

import logo from "../public/logo-mini.png";
// import logo from "../public/logoFooter.png";
export default function FooterSection({ mainMenu }) {
  const links = mainMenu.map((link) => ({
    ...link,
  }));
  const showChat = () => {
    _MEIQIA("showPanel");
  };
  const legal = [
    {
      label: "Tuyên bố pháp lý",
      url: "/article/legal-statement",
    },
    {
      label: "Báo cáo chính trực",
      url: "/article/integrity-violation",
    },
    {
      label: "Chống rửa tiền",
      url: "/article/money-laundering",
    },
    {
      label: "Hướng dẫn thực thi pháp lý",
      url: "/article/law-enforcement",
    },
  ];
  const agrement = [
    // {
    //   label: "Tuyên bố miễn trừ",
    //   url: "/article/disclaimer",
    // },
    {
      label: "Thoả thuận khách hàng",
      url: "/article/client-agreement",
    },
    {
      label: "Thỏa thuận đối tác",
      url: "/article/partner-agreement",
    },
    // {
    //   label: "Điều khoản bảo mật",
    //   url: "/article/policy",
    // },
    {
      label: "Rủi ro và miễn trách nhiệm",
      url: "/article/general-risk-disclosure",
    },
    {
      label: "Điều khoản xử lý dữ liệu cá nhân",
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
              <p className="text-lg font-semibold mb-2 ">
                Dịch vụ giao dịch tiền kỹ thuật số chuyên nghiệp
              </p>
              <p className="text-sm ">
                RoboForex luôn cố gắng hết sức cung cấp dịch vụ tiện lợi, an
                toàn và đáng tin cậy nhất, với mục tiêu trở thành nền tảng được
                lựa chọn hàng đầu của nhà đầu tư tài sản ngoại hối
              </p>
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
                <h3 className="font-semibold mb-4 ">Thông tin</h3>
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
                <h3 className="font-semibold mb-4 ">Pháp lý</h3>
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
                <h3 className="font-semibold mb-4 ">Thoả thuận</h3>
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
                <h3 className="font-semibold mb-4 ">Hỗ trợ</h3>
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
