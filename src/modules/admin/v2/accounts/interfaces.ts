import {EnumRecoveryListingStatus} from "./enums";

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
  status: EnumRecoveryListingStatus;
}
