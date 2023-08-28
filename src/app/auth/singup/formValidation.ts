import * as joi from "joi";

export type ISignupInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const singupSchema = joi.object({
  username: joi
    .string()
    .min(5)
    .max(30)
    .required()
    .pattern(new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/))
    .label("Username")
    .messages({
      "string.pattern.base": "Invalid username",
      "string.min": "Minimum 5 characters required",
      "string.max": "Maximum 30 characters allowed",
    }),
  email: joi
    .string()
    .required()
    .label("Email")
    .pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/)
    .messages({
      "any.required": "Must not be empty",
      "string.pattern.base": "Must be a valid email address",
    }),
  password: joi.string().min(3).max(15).required().label("Password").messages({
    "string.min": "Must be at least 5 characters",
    "string.max": "Must be 15 characters maximum",
  }),
  confirmPassword: joi
    .any()
    .equal(joi.ref("password"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "Must much 'password'" } }),
});


