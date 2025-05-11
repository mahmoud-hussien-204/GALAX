import Card from "@/components/Card";

import ReactApexChart from "react-apexcharts";

const totalOrders: {series: ApexAxisChartSeries; options: ApexCharts.ApexOptions} = {
  series: [
    {
      name: "Sales",
      data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
    },
  ],
  options: {
    chart: {
      type: "area",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00ab55"],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    yaxis: {
      min: 0,
      show: false,
    },
    grid: {
      padding: {
        top: 125,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
        stops: [100, 100],
      },
    },
    tooltip: {
      theme: "dark",
      cssClass: "!bg-base-300",
      x: {
        show: false,
      },
    },
  },
};

const TotalOrders = () => {
  return (
    <div className='h-full'>
      <Card className='px-0 pb-0'>
        <div className='mb-1rem flex items-center justify-between px-1rem text-white'>
          <h5 className='text-18 font-semibold'>Total Orders</h5>
        </div>
        <div className='relative'>
          <div className='overflow-hidden rounded-lg'>
            <ReactApexChart
              series={totalOrders.series}
              options={totalOrders.options}
              type='area'
              height={390}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TotalOrders;
