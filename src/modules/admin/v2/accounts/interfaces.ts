import {EnumGarageStatus} from "./enums";

export interface IGarage {
  id: string;
  garage_name: string;
  garage_logo: string;
  garage_phone: string;
  garage_mobile: string;
  garage_email: string;
  garage_whatsapp: string;
  garage_address: string;
  garage_city: string;
  garage_description: string;
  garage_latitude?: string | null;
  garage_longitude?: string | null;
  expires_at: string;
  status: EnumGarageStatus;
}

export type ICreateGarageForm = Omit<IGarage, "id" | "garage_logo"> & {
  garage_logo: File | string;
};

export type IEditGarageForm = ICreateGarageForm & {id: string};
