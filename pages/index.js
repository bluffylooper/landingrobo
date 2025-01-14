import Image from "next/image";
import localFont from "next/font/local";
import Chart from "../public/chart.png";
import Desktop from "../public/platform-web-image.png";
import User from "../public/xxxl_exness_b2b_cta_b66fbc29ea.jpg";

import Map from "../public/exness_b2b_home_desktop_fde496265e.jpg";
import City from "../public/background-about-rf.webp";
import User1 from "../public/user-1.png";
import User2 from "../public/user-2.png";
import User3 from "../public/user-3.png";
import User4 from "../public/user-4.png";
import User5 from "../public/user-5.png";
import SVG1 from "../public/image.svg";
import SVG2 from "../public/image-2.svg";
import SVG3 from "../public/image-3.svg";
import SVG4 from "../public/image-4.svg";
import SVG5 from "../public/image-5.svg";
import SVG6 from "../public/image-6.svg";
import MEDAL1 from "../public/medal.svg";
import MEDAL2 from "../public/medal-2.svg";
import awardLeft from "../public/icon-award-left.png";
import awardRight from "../public/icon-award-right.png";
import Protect from "../public/protect.png";
import Charts from "@/components/chart";
import React, { useEffect, useRef, useCallback } from "react";
import QRCode from "qrcode";
import Link from "next/link";
import InView from "@/components/in-view";
import NumberAnimation from "@/components/number-animation";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
  DotButton,
  useDotButton,
} from "@/components/EmbraCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR_BASE = 0.2;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla1__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    emblaApi?.plugins()?.autoScroll;
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla1">
      <div className="embla1__viewport" ref={emblaRef}>
        <div className="embla1__container">
          {slides.map((index) => (
            <div className="embla1__slide" key={index}>
              <div className="embla1__parallax">
                <div className="embla1__parallax__layer">
                  <Image
                    src={Map}
                    alt="map"
                    className="embla1__slide__img embla1__parallax__img w-full h-screen object-cover"
                  />
                  {/* <img
                    className="embla1__slide__img embla1__parallax__img w-full h-screen object-cover"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla1__controls">
        <div className="embla1__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla1__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla1__dot".concat(
                index === selectedIndex ? " embla1__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

const EmblaCarouselAdvise = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  useEffect(() => {
    emblaApi?.plugins()?.autoplay;
  }, [emblaApi]);

  return (
    <section className="embla2">
      <div className="embla2__viewport" ref={emblaRef}>
        <div className="embla2__container">
          {slides.map((item, key) => (
            <div className="embla2__slide" key={key}>
              <div className="embla2__slide__number">
                <Image src={item.img} alt="user" width={150} height={150} />
                <p className=" text-left text-[#edf0f299] mt-2  md:w-1/2  ">
                  {`"${item.desc}"`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla2__controls">
        <div className="embla2__buttons">
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
        </div>

        <div className="embla2__dots">
          {/* {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla2__dot".concat(
                index === selectedIndex ? " embla2__dot--selected" : ""
              )}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default function Home({ coins }) {
  useEffect(() => {
    const download = document.getElementById("download-canvas");

    QRCode.toCanvas(download, "http://localhost:3000/download", {
      width: 250,
    });
  }, []);

  return (
    <main>
      <section className=" text-white ">
        <div className="relative ">
          <Image src={Map} alt="map" className="w-full h-screen object-cover" />
          {/* <EmblaCarousel
            slides={Array.from(Array(15).keys())}
            options={{ dragFree: true, loop: true }}
          /> */}
          <div className="absolute inset-0 left-16 top-[-14rem] md:-top-20 md:left-36 flex flex-col items-start justify-center text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Giao dịch hơn</h1>

            <div className="text-5xl md:text-6xl font-bold">
              <NumberAnimation
                targetNumber={2250}
                rightContent={`&nbsp;CFDs`}
                className={"flex flex-row justify-center "}
              />{" "}
            </div>
            <p className="text-lg text-left text-white hidden md:block">
              Bạn còn mới với thị trường ngoại hối? Không sao.
              <br /> Hãy thử mua chỉ với $50 qua một thao tác nhấn, đồng thời
              nâng tầm kỹ năng
            </p>
            <Link href={"/download"}>
              <button className="bg-[#ffde02] text-white px-6 py-3 rounded text-lg font-bold">
                Bắt đầu giao dịch ngay
              </button>
            </Link>
            <p className="text-sm">*Vốn của bạn đang gặp rủi ro</p>
          </div>

          <div className="absolute  bottom-0 w-full grid grid-cols-2 gap-4 md:grid-cols-5 justify-around bg-white py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-black ">
                <NumberAnimation
                  className={"flex flex-row justify-center "}
                  leftContent={"$"}
                  targetNumber={25462603}
                />
              </div>
              <p className="text-sm text-black ">Khối lượng giao dịch 24h</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                <NumberAnimation
                  className={"flex flex-row justify-center "}
                  rightContent={"+"}
                  targetNumber={2726841}
                />
              </div>
              <p className="text-sm text-black">
                Người dùng hoạt động tích cực trên nền tảng
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                <NumberAnimation
                  startNumber={2000}
                  targetNumber={154}
                  className={"flex flex-row justify-center "}
                  rightContent={`&nbsp;triệu`}
                />
              </div>
              <p className="text-sm text-black">Lượng tiền gửi vào nền tảng</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                <NumberAnimation
                  startNumber={100}
                  targetNumber={5}
                  className={"flex flex-row justify-center "}
                  rightContent={`&nbsp;phút`}
                />
              </div>
              <p className="text-sm text-black">
                Thời gian rút tiền trung bình
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                <NumberAnimation
                  startNumber={100}
                  className={"flex flex-row justify-center "}
                  targetNumber={7}
                  rightContent={`&nbsp;ngày`}
                />
              </div>
              <p className="text-sm text-black">Hỗ trợ riêng biệt</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-4" id="about">
        <h3>Lợi thế giao dịch của bạn với RoboForex</h3>
        <p className=" text-gray-500 mt-2 pb-6">
          Không có giới hạn nào cho công ty môi giới RoboForex khi cung cấp
          những lợi ích vượt trội cho khách hàng.
        </p>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            fontSize: 0,
            display: "flex",
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title:
                "Thanh toán cho các đối tác: <br/> Lên đến 85% mức chênh lệch trung bình <br/> +20% từ hoán đổi",
              icon: SVG1,
            },
            { title: "8 loại tài sản", icon: SVG2 },
            {
              title:
                "Tài khoản vi mô với <br/> Kích thước lô tối thiểu là 0,01",
              icon: SVG3,
            },
            { title: "Hệ thống giao dịch sao chép tiên tiến", icon: SVG4 },
            { title: "Thực hiện lệnh nhanh nhất", icon: SVG5 },
            { title: "Chênh lệch chặt chẽ từ 0 pips", icon: SVG6 },
          ].map((item, key) => (
            <li
              key={key}
              style={{
                display: "inline-block",
                boxSizing: "border-box",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                minWidth: "280px",
                flexBasis: "33.33333333%",
                flexGrow: 1,
              }}
            >
              <div className="flex justify-items-start items-center">
                <Image
                  alt="Icon representing tight spreads"
                  src={item.icon}
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: "25%",
                    height: "100%",
                    minHeight: "8rem",
                    fontSize: "1rem",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 8em",
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="align-middle pl-4 pr-4 whitespace-normal text-xl leading-tight text-gray-700 overflow-hidden"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <InView>
        <section className=" text-black py-6 mx-10 rounded  ">
          <div className="container mx-auto px-4 text-center flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[70%]">
              <h1 className=" text-3xl md:text-4xl font-bold mb-4">
                Vận hành an toàn nhiều năm, không có sự cố an ninh và bảo mật!
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nền tảng đáng tin cậy dành cho bạn
              </h2>
              <p className="text-lg md:text-xl">
                An toàn là ưu tiên hàng đầu, chúng tôi không ngừng nỗ lực để bảo
                vệ tài sản và thông tin của bạn.
              </p>
            </div>
            <div className="w-full md:w-[30%]  justify-center">
              <Image
                src={Protect}
                alt="Security shield with check mark and Bitcoin symbol"
              />
              {/* <img
              alt="Security shield with check mark and Bitcoin symbol"
              className="w-40 h-40"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/iQ1awP1jdsafI6HB85tViYPYfSOp5ArbeApSnp723GcokLwnA.jpg"
              width="150"
            /> */}
            </div>
          </div>
        </section>
      </InView>
      <InView>
        <section className="bg-gray-100 text-center py-12">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Người chiến thắng hơn 10 giải thưởng danh giá
            </h1>
            <p className="text-gray-600 mt-4">
              Công ty môi giới tài chính RoboForex được công nhận bởi các chuyên
              gia được kính trọng nhất trong ngành tài chính.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-12 space-y-8 md:space-y-0 md:space-x-12">
              {[
                {
                  icon: MEDAL1,
                  year: 2024,
                  title: "Chương trình môi giới giới thiệu tốt nhất - LatAm",
                  desc: "Giải thưởng GF - Bán lẻ",
                },
                {
                  icon: MEDAL1,
                  year: 2023,
                  title: "Ứng dụng giao dịch di động tốt nhất",
                  desc: "Giải thưởng GF - B2B",
                },
                {
                  icon: MEDAL2,
                  year: 2022,
                  title: "Nhà môi giới đáng tin cậy nhất",
                  desc: "Giải thưởng Tạp chí Kinh doanh Quốc tế",
                },
              ].map((item, key) => (
                <div className="award-item" key={key}>
                  <div className="award-icon justify-center ">
                    {/* <div className="medal-style"> */}
                    <Image src={awardLeft} width={37} height={98} />
                    <Image
                      alt="Award icon for Best Introducing Broker Programme - LatAm"
                      // className=" mx-auto"
                      height="90"
                      src={item.icon}
                      width="50"
                    />
                    <Image src={awardRight} width={37} height={98} />
                    {/* </div> */}
                  </div>
                  <div className="award-year">{item.year}</div>
                  <div className="award-title">{item.title}</div>
                  <div className="award-subtitle">{item.desc}</div>
                </div>
              ))}

              {/* <div className="text-center">
                <div className=" relative medal-style">
                  <Image
                    alt="Award icon for Best Introducing Broker Programme - LatAm"
                    className=" mx-auto"
                    height="90"
                    src={MEDAL1}
                    width="50"
                  />
                </div>
                <p className="text-gray-600 mt-2">{"item.year"}</p>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {"item.title"}
                </h2>
                <p className="text-gray-600">{"item.desc"}</p>
              </div>
              <div className="text-center">
                <div className=" relative medal-style">
                  <Image
                    alt="Award icon for Best Introducing Broker Programme - LatAm"
                    className=" mx-auto"
                    height="90"
                    src={MEDAL1}
                    width="50"
                  />
                </div>
                <p className="text-gray-600 mt-2">{"item.year"}</p>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {"item.title"}
                </h2>
                <p className="text-gray-600">{"item.desc"}</p>
              </div>
              <div className="text-center">
                <div className=" relative medal-style">
                  <Image
                    alt="Award icon for Best Introducing Broker Programme - LatAm"
                    className=" mx-auto"
                    height="90"
                    src={MEDAL1}
                    width="50"
                  />
                </div>
                <p className="text-gray-600 mt-2">{"item.year"}</p>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {"item.title"}
                </h2>
                <p className="text-gray-600">{"item.desc"}</p>
              </div> */}
            </div>
          </div>
        </section>
      </InView>
      <InView>
        <div className="bg-white text-gray-900 mx-10">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Các loại tiền phổ biến</h1>
            <div className=" overflow-x-auto">
              <table className="w-full text-left ">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-2">Tên</th>
                    <th className="py-2">Giá thấp nhất</th>
                    <th className="py-2">Giá cao nhất</th>
                    {/* <th className="py-2">Thay đổi</th> */}
                    <th className="py-2">Giá trị 24h</th>
                    <th className="py-2">Xu thế tình hình thị trường</th>
                    {/* <th className="py-2">Hành động</th> */}
                  </tr>
                </thead>
                <tbody>
                  {coins?.length
                    ? coins?.map((item, key) => (
                        <tr className="border-b" key={key}>
                          <td className="py-2 ">
                            {/* <img
                      alt="ORCA logo"
                      className="w-6 h-6 mr-2"
                      height="24"
                      src="https://storage.googleapis.com/a1aa/image/IjkcCfeQBatsjE4BVjK2P3f0Weup69pvNG1JTebBpSYYr1DfE.jpg"
                      width="24"
                    /> */}
                            {item?.symbol}
                          </td>
                          <td className="py-2">
                            <NumberAnimation
                              duration={1}
                              targetNumber={item?.data?.lo}
                            />
                            {/* {item?.data?.lo} */}
                          </td>
                          <td className="py-2 ">
                            <NumberAnimation
                              duration={1}
                              targetNumber={item?.data?.hi}
                            />
                            {/* {item?.data?.hi} */}
                          </td>
                          <td className="py-2">
                            <NumberAnimation
                              duration={1}
                              targetNumber={item?.data?.lastdaily}
                            />
                            {/* {item?.data?.lastdaily} */}
                          </td>
                          <td className="py-2">
                            <Charts />
                          </td>
                          {/* <td className="py-2 text-blue-500">Giao dịch</td> */}
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </InView>
      {/* <InView>
        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <img
                alt="Multi-signature storage illustration"
                className="mx-auto mb-4"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/Df14lG9mfksCFUD08YdyQe2iKoXjDyPCgU6GlGHrsWirkLwnA.jpg"
                width="100"
              />
              <h3 className="text-xl font-bold mb-2">Lưu trữ đa chữ ký</h3>
              <p>
                Hệ thống mã hóa và lưu trữ đi đầu của chúng tôi đảm bảo rằng tài
                sản của bạn luôn được bảo mật và an toàn.
              </p>
            </div>
            <div>
              <img
                alt="Capital allocation illustration"
                className="mx-auto mb-4"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/jU7v40e93dX9Pi7wfhCz6jeQW7LGWYwPdvDs1ntNdcTkkLwnA.jpg"
                width="100"
              />
              <h3 className="text-xl font-bold mb-2">Phân chia tiền vốn</h3>
              <p>
                Chúng tôi tuân thủ các tiêu chuẩn bảo mật cao nhất và triển khai
                các biện pháp bảo mật nghiêm ngặt nhất, nhằm đảm bảo an toàn cho
                tài khoản của bạn.
              </p>
            </div>
            <div>
              <img
                alt="Proof of reserve illustration"
                className="mx-auto mb-4"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/iz0oaLw8wPJ8L9xbWxndpB4WI266zdpFmVsn2eNgv89J5C8JA.jpg"
                width="100"
              />
              <h3 className="text-xl font-bold mb-2">
                Chứng minh lưu trữ tài sản por
              </h3>
              <p>
                Chứng minh lưu trữ tài sản por là một phương pháp phổ biến được
                sử dụng để chứng minh việc quản lý tài sản.
              </p>
            </div>
          </div>
        </section>
      </InView> */}

      {/* <InView>
        <div className=" text-black">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              Dịch vụ giao dịch tiền kỹ thuật số chuyên nghiệp
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <img
                  alt="Icon representing high experience"
                  className="mx-auto mb-4"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/ABNeEz3AdekMI00DFrqpd2i2MjQWLtlqCuihSu3uYVEevLwnA.jpg"
                  width="100"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-400">
                  Trải nghiệm đỉnh cao
                </h2>
                <p className="text-gray-400">
                  Mỗi giao dịch đều là những trải nghiệm thú vị, đưa bạn lên tầm
                  cao mới
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <img
                  alt="Icon representing low fees"
                  className="mx-auto mb-4"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/ehzDPvW5T6VMBa7kHhYqypXTpSf0V5ZfdO5tbtMsnmSefuAfE.jpg"
                  width="100"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-400">
                  Tỉ lệ phí cực thấp
                </h2>
                <p className="text-gray-400">
                  Phí giao dịch cực thấp, lợi nhuận cực cao
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <img
                  alt="Icon representing opportunity"
                  className="mx-auto mb-4"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/dhNuspGpMaL6Gt6yHtiS35QE3YtlFYokXAJe7YIHqUrA8C8JA.jpg"
                  width="100"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-400">
                  Nắm bắt cơ hội
                </h2>
                <p className="text-gray-400">
                  Bạn có thể tìm thấy những dự án tiềm năng và nắm bắt cơ hội
                  tăng lợi nhuận
                </p>
              </div>
            </div>
          </div>
        </div>
      </InView>  */}

      {/* <InView>
        <section className="bg-white text-gray-900">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Đa dạng sản phẩm đầu tư
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <img
                  alt="Bitcoin and user icon"
                  className="w-24 h-24"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/q0OeUCeduwlY8UqLVNVVbOKNevVuyDSsMGi4p49h4yePuXgPB.jpg"
                  width="100"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    Nơi tập trung của các loại tiền tệ
                  </h2>
                  <p className="text-gray-500">
                    Trên nền tảng giao dịch với tốc độ xử lý giao dịch cực nhanh
                    của chúng tôi, bạn có thể giao dịch ngoại hối
                  </p>
                  <a className="text-black" href="#">
                    Giao dịch ngay lập tức &gt;
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  alt="Gavel and gear icon"
                  className="w-24 h-24"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/cXTotqRfeYlEREaf4xDe1rzhLSO9n6TALf6qFfMxufrnw9C8JA.jpg"
                  width="100"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    Nền tảng giao dịch hợp đồng đáng tin cậy nhất
                  </h2>
                  <p className="text-gray-500">
                    Tại sàn giao dịch nhanh nhất và ổn định nhất, vì vậy có thể
                    giao dịch các sản phẩm tài chính phái sinh của tiền mã hóa
                    với đòn bẩy lên đến 125 lần.
                  </p>
                  <a className="text-black" href="#">
                    Giao dịch ngay lập tức &gt;
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  alt="Financial management icon"
                  className="w-24 h-24"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/imFqydGGSu48Ox8ZXY4XHKqi4r50Q56fyB8YXPfVcnQk7F4TA.jpg"
                  width="100"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    Quản lý tài chính an toàn nhất trên thị trường
                  </h2>
                  <p className="text-gray-500">
                    RoboForex có hệ thống kiểm soát rủi ro hoàn chỉnh, có sản
                    phẩm quản lý tài chính an toàn và đáng tin cậy nhất, đảm bảo
                    tăng giá ổn định để bảo vệ tài sản của bạn.
                  </p>
                  <a className="text-black" href="#">
                    Kiếm tiền ngay &gt;
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  alt="Compliance and transparency icon"
                  className="w-24 h-24"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/NOrAkZTIMBYBNxcp4uZo4Yrkd5WmFIe8kPG0seUDfZFE3LwnA.jpg"
                  width="100"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    Phù hợp quy định và minh bạch
                  </h2>
                  <p className="text-gray-500">
                    RoboForex là một tổ chức dịch vụ tài sản số toàn cầu, có các
                    trung tâm hoạt động tại Canada, liên minh Châu Âu, Dubai,
                    v.v. an toàn và minh bạch 100%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InView> */}

      <InView>
        <section className="bg-white flex items-center justify-center ">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Loại tiền được đánh dấu sao có độ sâu giao dịch hàng đầu toàn cầu.
            </h1>
            <div className="w-10/12 m-auto mt-10">
              <Image src={Chart} alt="Chart" />
            </div>
            {/* Chart */}
          </div>
        </section>
      </InView>

      <section className="bg-white mt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-row md:flex-row ">
            <InView direction={"left"}>
              <div className="flex flex-col  mb-8 md:mb-0 md:mr-8 basis-1/2">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">
                    Giao dịch mọi lúc mọi nơi
                  </h1>
                  <p className="text-lg text-gray-500 mb-8">
                    Bất luận là app hay web, đều có thể mở giao dịch của bạn
                    nhanh chóng
                  </p>
                </div>
                <div className="flex flex-row self-center">
                  <canvas id="download-canvas"></canvas>
                  {/* <img
                  alt="QR code for downloading the app"
                  className="mb-4"
                  height="150"
                  src="https://storage.googleapis.com/a1aa/image/mhzhg7Len1TNeUIewdqXuGjkfiV9CZnmeWaHuBJ9PuYr5vAfE.jpg"
                  width="150"
                /> */}
                  <div className="pl-5 content-center ">
                    <p className="text-lg mb-2">Quét mã tải xuống</p>
                    <p className="text-2xl font-bold">iOS &amp; Android</p>
                  </div>
                </div>
                <div className="flex mt-4 justify-center">
                  {/* <div className="flex flex-col items-center mr-20">
                    <i className="fab fa-android text-3xl mb-2"></i>
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
                  <div className="flex flex-col items-center">
                    <i className="fab fa-apple text-3xl mb-2"></i>
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
                  </div> */}
                </div>
              </div>
            </InView>
            <InView direction={"right"}>
              <div className="basis-1/2 hidden md:block">
                <Image src={Desktop} alt="Desktop" />
                {/* <img
                alt="Laptop showing trading platform"
                className="w-1/2 md:w-auto md:mr-4"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/mSehdQI2dJRqXqtK3fH9euIaz50KEGcZjVs8LI8GdG3ZeXgPB.jpg"
                width="100"
              /> */}
              </div>
            </InView>
            {/* <div className="flex justify-center">
              <img
                alt="Mobile phone showing trading app"
                className="w-1/2 md:w-auto"
                height="600"
                src="https://storage.googleapis.com/a1aa/image/d3B34ffYerAFporEKZDqKgjwHZ1oPbxxH9OpB50GwEYe8XgPB.jpg"
                width="300"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="">
        <div className=" image-city w-full text-white md:flex md:justify-end md:h-[70vh] items-center">
          <div style={{ flex: "0 0 50%" }}>
            <h2>Về RoboForex</h2>
            <br />
            <p>
              RoboForex đã hoạt động từ năm 2009 và được quản lý bởi FSC, giấy
              phép số 000138/7.
            </p>
            <br />
            <p>
              Kể từ khi thành lập, RoboForex luôn tập trung vào việc cung cấp
              các điều kiện giao dịch tốt nhất bằng cách sử dụng các công nghệ
              tiên tiến và nhiều năm kinh nghiệm. RoboForex là một công ty môi
              giới tài chính, cung cấp 9 loại tài sản và hơn 12.000 công cụ để
              giao dịch. Chúng tôi rất tự hào về nhiều dịch vụ mà chúng tôi cung
              cấp cho khách hàng và đối tác của mình, có chất lượng như nhau cho
              tất cả mọi người, bất kể kinh nghiệm và số tiền đầu tư của họ.
            </p>
          </div>
        </div>
      </section> */}
      <InView>
        <section className=" bg-[#070e20]">
          <div className="container  flex flex-col-reverse md:flex-row justify-between items-center  ">
            <div className="  w-full md:w-1/2  my-10 ">
              <h3 className="text-white pb-4 ">
                Nói chuyện với các chuyên gia của chúng tôi
              </h3>
              <p className=" text-[#edf0f299]  pb-20  ">
                Liên hệ với các chuyên gia B2B của chúng tôi để tìm hiểu thêm về
                dịch vụ độc quyền của chúng tôi và thảo luận về các giải pháp
                phù hợp sẽ phù hợp với bạn.
              </p>
              <Link href={"/download"}>
                <button className="bg-[#ffde02] text-white px-6 py-3 rounded text-lg font-bold">
                  Bắt đầu giao dịch ngay
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <EmblaCarouselAdvise
                slides={[
                  {
                    img: User2,
                    desc: "Hiểu rõ các khái niệm cơ bản như spread, đòn bẩy, và LOT là bước đầu tiên để giao dịch hiệu quả",
                  },
                  {
                    img: User1,
                    desc: "Thành công trên thị trường ngoại hối đòi hỏi kiên nhẫn, kỷ luật và khả năng học hỏi liên tục",
                  },
                  {
                    img: User3,
                    desc: "Tránh giao dịch theo cảm xúc, hãy tuân thủ chiến lược đã định sẵn để đạt hiệu quả",
                  },
                  {
                    img: User4,
                    desc: "Luôn quản lý rủi ro bằng cách đặt lệnh dừng lỗ, không đầu tư số tiền bạn không thể mất",
                  },
                  {
                    img: User5,
                    desc: "Đa dạng hóa danh mục đầu tư, không đặt tất cả vốn vào một cặp tiền duy nhất",
                  },
                ]}
                options={{ loop: true }}
              />
              {/* <Image src={User} alt="Desktop" /> */}
            </div>
          </div>
        </section>
      </InView>
    </main>
  );
}

export async function getStaticProps() {
  try {
    if (process.env.API_URL) {
      // const res = await fetch(process.env.API_URL + "api/blog?limit=5");
      const resCoin = await fetch(
        process.env.API_URL + "api/coinList/listing?limit=5"
      );
      // const { data } = await res.json();
      const { data: dataCoin } = await resCoin.json();

      return { props: { coins: dataCoin }, revalidate: 10 };
    } else throw new Error("Error");
  } catch (e) {
    console.log("Could not get posts", e);

    return {
      props: { posts: [], coins: [] },
    };
  }
}
