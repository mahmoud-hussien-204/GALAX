import {EnumBannerStatus} from "./enums";

export interface IBanner {
  id: string;
  title: string;
  link: string;
  status: EnumBannerStatus;
  image: string;
  created_at: string;
}

export interface ICreateBannerForm {
  title: string;
  link: string;
  status: EnumBannerStatus;
  image: File | string;
}

export type IEditBannerForm = ICreateBannerForm & {id: string};
