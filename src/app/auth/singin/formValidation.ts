import * as joi from "joi";

export type ISinginInputs = {
  username: string;
  password: string;
};

export const defaultValues = {
  username: "",
  password: "",
};

export const singinSchema = joi.object({
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

  password: joi.string().min(3).max(15).required().label("Password").messages({
    "string.min": "Must be at least 5 characters",
    "string.max": "Must be 15 characters maximum",
  }),
});
