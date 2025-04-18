import * as Yup from "yup";
import { getValidation } from "../constants/validation";

export const getLoginSchema = (t: (key: string) => string) => {
  const validation = getValidation(t);
  return Yup.object().shape({
    email: validation.email,
    password: validation.password,
  });
};

export const getSignupSchema = (t: (key: string) => string) => {
  const validation = getValidation(t);
  return Yup.object().shape({
    email: validation.email,
    phone: validation.phone,
    password: validation.password,
    isTerms: validation.isTerms,
  });
};

export const resetPassSchema = Yup.object().shape({
  otp: Yup.string().required("OTP is required"),
  password: Yup.string().required("password is required"),
});
