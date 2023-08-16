import * as joi from "joi";

export type ISignupInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const singupSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required(),
});

export const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const formFieldsRules = {
  username: {
    required: "Username is required",
    minLength: {
      value: 6,
      message: "Username must be at least 6 characters",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/,
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Your password must be at least 6 characters",
    },
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      message:
        "Your passwor must have at least one uppercase letter, one lowercase letter and one digit ",
    },
  },
};
