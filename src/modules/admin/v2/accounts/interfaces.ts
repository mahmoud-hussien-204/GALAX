import {EnumGarageStatus} from "./enums";

export interface IRecoveryListing {
  service_name: string;
  service_logo?: File | null;
  service_phone: string;
  service_mobile?: string | null;
  service_email: string;
  service_whatsapp?: string | null;
  service_address: string;
  service_city: string;
  service_description?: string | null;
  service_latitude?: string | null;
  service_longitude?: string | null;
  expires_at?: string | null;
  status: EnumGarageStatus;
}

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
