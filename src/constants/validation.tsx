import * as Yup from "yup";

export const getValidation = (t: (key: string) => string) => ({
  email: Yup.string()
    .email(t("validation.invalid_email"))
    .required(t("validation.email_required")),

  password: Yup.string()
    .min(6, t("validation.password_min"))
    .required(t("validation.password_required")),

  phone: Yup.string()
    .required(t("validation.phone_required"))
    .matches(
      /^\+?[1-9]\d{1,14}$/, // E.164 format (international)
      t("validation.invalid_phone")
    ),

  isTerms: Yup.boolean().oneOf([true], t("validation.must_accept_terms")),
});
