import { useEffect, useState, useRef, Fragment } from "react";

import { motion, useInView } from "motion/react";
import CountUp from "react-countup";
const NumberAnimation = ({
  startNumber = 0,
  targetNumber,
  duration = 2,
  leftContent,
  rightContent,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Kiểm tra khi phần tử vào viewport
  const isInteger = Number.isInteger(targetNumber);
  return (
    <div ref={ref}>
      {isInView ? (
        <div className={className}>
          <div dangerouslySetInnerHTML={{ __html: leftContent }}></div>
          <CountUp
            start={startNumber}
            end={targetNumber}
            duration={duration}
            decimals={isInteger ? 0 : 10}
            separator="," // Thêm dấu phẩy phân cách
            decimal="." // Ký tự dấu thập phân
          />
          <div dangerouslySetInnerHTML={{ __html: rightContent }}></div>
        </div>
      ) : (
        targetNumber
      )}
    </div>
  );
};

export default NumberAnimation;
