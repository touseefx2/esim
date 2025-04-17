import * as yup from "yup";
import validation from "../constants/validation";

// export const LoginUserSchema = yup.object().shape({
//   organization: validation.organization,
//   username: validation.username,
//   password: validation.password,
// });

export const loginSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
});

export const resetPassSchema = yup.object().shape({
  otp: yup.string().required("OTP is required"),
  password: yup.string().required("password is required"),
});
