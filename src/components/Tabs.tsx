import AppHelper from "@/helpers/appHelper";

import {Link, To, useLocation, useSearchParams} from "react-router-dom";

interface IProps {
  tabs: {label: string; value: string}[];
  to?: (item: unknown) => To;
}

const Tabs = ({tabs, to}: IProps) => {
  const [searchParams] = useSearchParams();

  const tabSearchParams = searchParams.get("tab");

  const {pathname} = useLocation();

  return (
    <div role='tablist' className='tabs-boxed flex overflow-x-auto'>
      {tabs.map((tab, index) => (
        <Link
          key={index}
          role='tab'
          to={
            to
              ? to(tab)
              : {
                  search: `?tab=${tab.value}`,
                }
          }
          className={AppHelper.classes("tab w-fit min-w-[150px] whitespace-nowrap", {
            "tab-active": tabSearchParams === tab.value || pathname.endsWith(tab.value),
          })}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
