import {EnumBannerStatus} from "../enums";

export const constantBannerStatus = [
  {
    label: "Select Banner Status",
    value: "",
    disabled: true,
  },
  {
    label: EnumBannerStatus.SHOW,
    value: EnumBannerStatus.SHOW,
  },
  {
    label: EnumBannerStatus.HIDE,
    value: EnumBannerStatus.HIDE,
  },
  // {
  //   label: EnumBannerStatus.PENDING,
  //   value: EnumBannerStatus.PENDING,
  // },
  // {
  //   label: EnumBannerStatus.REVIEW,
  //   value: EnumBannerStatus.REVIEW,
  // },
  // {
  //   label: EnumBannerStatus.APPROVED,
  //   value: EnumBannerStatus.APPROVED,
  // },
  // {
  //   label: EnumBannerStatus.REJECTED,
  //   value: EnumBannerStatus.REJECTED,
  // },
  // {
  //   label: EnumBannerStatus.EXPIRED,
  //   value: EnumBannerStatus.EXPIRED,
  // },
];
