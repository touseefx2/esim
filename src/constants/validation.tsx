import * as Yup from "yup";

const organization = Yup.string().required("Organization name is required");
const email = Yup.string().email("Invalid email").required("Email is required");
const username = Yup.string()
  .required("Username is required")
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must be at most 20 characters long")
  .matches(
    /^[a-zA-Z][a-zA-Z0-9._]*$/,
    "Username must start with a letter and can only contain alphanumeric characters, underscores, and dots"
  )
  .matches(
    /^(?!.*[_.]{2})[a-zA-Z0-9._]+$/,
    "Username cannot contain consecutive underscores or dots"
  )
  .matches(
    /^(?![_.])[a-zA-Z0-9._]+(?<![_.])$/,
    "Username cannot start or end with an underscore or dot"
  );
const password = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

export default {
  email,
  organization,
  username,
  password,
};
