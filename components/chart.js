// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <p>loading</p>,
});
export default function Charts() {
  function createRandomArray() {
    const array = [];

    for (let i = 0; i < 8; i++) {
      const randomNum = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
      array.push(randomNum);
    }

    return array;
  }
  const state = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    // xaxis: {
    //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    // },

    stroke: {
      curve: "smooth",
      width: 0,
      // colors: ["#4CAF50"],
    },
    fill: {
      type: "gradient", // Kiểu tô màu
      gradient: {
        shade: "light", // Sử dụng màu nhạt
        type: "vertical", // Tô màu theo chiều dọc
        gradientToColors: ["#BBDEFB"], // Màu chuyển đổi
        // opacityFrom: 0.5, // Độ trong suốt bắt đầu
        // opacityTo: 0, // Độ trong suốt kết thúc
        stops: [0, 100], // Điểm dừng gradient (0% đến 100%)
      },
    },
    tooltip: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "series-1",
      data: createRandomArray(),
    },
  ];
  // return <></>;
  return (
    <Chart
      options={state}
      series={series}
      type="area"
      height={50}
      width={200}
    />
  );
}
