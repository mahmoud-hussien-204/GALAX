import {EnumGarageStatus} from "../enums";
import {IRecoveryListing} from "../interfaces";
import * as yup from "yup";

export const fileSchema = yup
  .mixed<File>()
  .test("fileType", "Only image files are allowed", (value) => {
    return !value || (value instanceof File && value.type.startsWith("image/"));
  });

export const recoveryListingSchema = yup.object<IRecoveryListing>().shape({
  service_name: yup.string().required("Service name is required"),

  service_logo: fileSchema.notRequired(),

  service_phone: yup
    .string()
    .required("Service phone is required")
    .matches(/^\+?\d{6,15}$/, "Invalid phone number"),

  service_mobile: yup
    .string()
    .notRequired()
    .matches(/^\+?\d{6,15}$/, "Invalid mobile number")
    .nullable(),

  service_email: yup.string().email("Invalid email format").required("Service email is required"),

  service_whatsapp: yup
    .string()
    .notRequired()
    .matches(/^\+?\d{6,15}$/, "Invalid WhatsApp number")
    .nullable(),

  service_address: yup.string().required("Service address is required"),

  service_city: yup.string().required("Service city is required"),

  service_description: yup.string().notRequired().nullable(),

  service_latitude: yup
    .string()
    .notRequired()
    .test("service_latitude", "Latitude must be a valid number", (value) => {
      if (!value) return true;
      return /^(-?\d+(\.\d+)?)$/.test(value);
    })
    .nullable(),

  service_longitude: yup
    .string()
    .notRequired()
    .test("service_longitude", "Longitude must be a valid number", (value) => {
      if (!value) return true;
      return /^(-?\d+(\.\d+)?)$/.test(value);
    })
    .nullable(),

  expires_at: yup
    .string()
    .notRequired()
    .test("expires_at", "Expiration date must be in the future", (value) => {
      if (!value) return true;
      const regex = new RegExp(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/);
      if (regex.test(value)) return true;
      return !value || new Date(value) > new Date();
    })
    .nullable(),

  status: yup
    .mixed<EnumGarageStatus>()
    .oneOf(Object.values(EnumGarageStatus))
    .required("Status is required"),
});
