interface IUserResponse {
  access_token: string;
  token_type: string;
  user: IUser;
}

interface IUser {
  id: number;
  uid: string;
  name: string;
  email: string;
  email_verified_at: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  user_type: string;
  is_company: number;
  business_name: string;
  business_email: string;
  business_phone: string;
  business_address: string;
  business_city: string;
  business_license: string;
  business_whatsapp: string;
  business_logo: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  token: string;
  role: IUserRole;
}

type IUserStatus = keyof typeof import("./enums").EnumUserStatus;

type IUserRole = keyof typeof import("./enums").EnumUserRole;

interface ISvgIconProps {
  svgProps?: import("react").SVGProps<SVGSVGElement>;
  pathProps?: import("react").SVGProps<SVGPathElement>;
}

type IModals = keyof typeof import("./enums").EnumModals;

interface IModalComponentProps {
  type: IModals | undefined;
  isOpen: boolean;
  show: (type: IModals, data?: unknown) => void;
  hide: () => void;
  data: unknown;
}

type IPagination = {
  recordsTotal: number;
  recordsFiltered: number;
  draw: string;
};

interface IResponse<T> extends IPagination {
  data: T;
  success: boolean;
  message: string;
}

interface IError extends Error {
  message: string;
}

type IQueryParams = {
  page?: string | number;
  limit?: string | number;
  search?: string;
};

interface ICoin {
  id: number;
  name: string;
  type: string;
  status: number;
  is_withdrawal: number;
  is_deposit: number;
  is_buy: number;
  is_sell: number;
  withdrawal_fees: string;
  maximum_withdrawal: string;
  minimum_withdrawal: string;
  minimum_sell_amount: string;
  minimum_buy_amount: string;
  sign: null;
  trade_status: number;
  is_virtual_amount: number;
  is_transferable: number;
  is_wallet: number;
  is_primary: null;
  is_currency: number;
  is_base: number;
  coin_icon: null;
  created_at: string;
  updated_at: string;
}

interface IBank {
  id: number;
  account_holder_name: string;
  account_holder_address: string;
  bank_name: string;
  bank_address: string;
  country: string;
  swift_code: string;
  iban: string;
  note: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface INotification {
  id: number;
}
