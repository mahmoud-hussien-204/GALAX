import Card from "@/components/Card";

import ReactApexChart from "react-apexcharts";

const salesByCategory: {options: ApexCharts.ApexOptions} = {
  options: {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["#202020"],
    },
    colors: ["#5c1ac3", "#e2a03f"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        size: 6,
        offsetX: -6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      height: 50,
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "29px",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "26px",
              color: "#fff",
              offsetY: 16,
              formatter: (val) => {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#fff",
              fontSize: "29px",
              formatter: (w) => {
                return w.globals.seriesTotals.reduce(function (a: number, b: number) {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    labels: ["Active Users", "Inactive Users"],
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
    },
  },
};

interface IProps {
  active: number;
  inactive: number;
}

const Users = ({active, inactive}: IProps) => {
  return (
    <div className='h-full'>
      <Card>
        <div className='mb-1rem flex items-center justify-between text-white'>
          <h5 className='text-18 font-semibold'>Users</h5>
        </div>
        <div className='relative'>
          <div className='overflow-hidden rounded-lg'>
            <ReactApexChart
              series={[active, inactive]}
              options={salesByCategory.options}
              type='donut'
              height={430}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Users;
