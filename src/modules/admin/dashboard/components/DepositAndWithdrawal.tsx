import Card from "@/components/Card";

import ReactApexChart from "react-apexcharts";

//Revenue Chart
const revenueChart: {options: ApexCharts.ApexOptions} = {
  options: {
    chart: {
      type: "area",
      fontFamily: "Poppins",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
      lineCap: "square",
    },
    colors: ["#2196F3", "#E7515A"],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: "#1B55E2",
          strokeColor: "transparent",
          size: 7,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#E7515A",
          strokeColor: "transparent",
          size: 7,
        },
      ],
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-title",
          colors: "#888ea8",
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: (value: number) => {
          return value / 1000 + "K";
        },
        offsetX: -10,
        offsetY: 0,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-yaxis-title",
          colors: "#888ea8",
        },
      },
      opposite: false,
    },
    grid: {
      borderColor: "rgba(255 143 0 / 0.1)",

      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "16px",
      markers: {
        size: 6,
        offsetX: -6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      theme: "dark",
      cssClass: "!bg-base-300",
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.19,
        opacityTo: 0.05,
        stops: [100, 100],
      },
    },
  },
} as const;

interface IProps {
  deposits: number[];
  withdrawals: number[];
}

const DepositAndWithdrawal = ({deposits, withdrawals}: IProps) => {
  return (
    <div className='h-full xl:col-span-2'>
      <Card>
        <div className='mb-1rem flex items-center justify-between text-white'>
          <h5 className='text-18 font-semibold'>Deposit and Withdrawal</h5>
        </div>
        <div className='relative'>
          <div className='overflow-hidden rounded-lg'>
            <ReactApexChart
              series={[
                {
                  name: "Deposit",
                  data: deposits,
                },
                {
                  name: "Withdrawal",
                  data: withdrawals,
                },
              ]}
              options={revenueChart.options}
              type='area'
              height={360}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DepositAndWithdrawal;
