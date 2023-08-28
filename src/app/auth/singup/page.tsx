"use client";
import Button from "@/components/global/button";
import Input from "@/components/global/input";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useRegisterMutation } from "@/redux/api/auth";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ISignupInputs, singupSchema, defaultValues } from "./formValidation";

export default function Singup(): JSX.Element {
  const [registerUser, { error, isLoading, data, isSuccess, isError }] =
    useRegisterMutation();

  // ===== Form handeling =====
  const { handleSubmit, control } = useForm<ISignupInputs>({
    resolver: joiResolver(singupSchema),
    defaultValues: {
      ...defaultValues,
    },
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }

    if (isError) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // ====== Submit form ==========
  const onSubmit = (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const { confirmPassword, ...rest } = data;
    registerUser({ ...rest });
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="  py-3 px-5  w-80">
        <div className=" w-full flex-col flex gap-4 items-center justify-center">
          <p className="bg-clip-text  text-transparent text-2xl font-semibold bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
            SMARKET
          </p>
          <p className="">Create an account</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded flex items-center justify-center flex-col gap-3"
        >
          <div className="w-full">
            <Controller
              name="username"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  addonBefore={<AiOutlineUser />}
                  label={<p className=" text-sm">Username</p>}
                  placeholder="Enter your username"
                  type="text"
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  addonBefore={<AiOutlineMail />}
                  label={<p className=" text-sm">Email</p>}
                  placeholder="Enter your email address"
                  {...field}
                  refEl={ref}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  addonBefore={<AiOutlineLock />}
                  label={<p className=" text-sm">Password</p>}
                  placeholder="Enter your password"
                  type="password"
                  required
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  addonBefore={<AiOutlineLock />}
                  label={<p className=" text-sm">Confirm password</p>}
                  placeholder="Confirm your password"
                  type="password"
                  required
                  {...field}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className=" w-full flex items-center justify-center">
            <p className=" font-light text-xs">
              Already have an account ?{" "}
              <span className=" font-normal cursor-pointer text-primary-color">
                Singin
              </span>
            </p>
          </div>

          <div className="flex w-full items-center my-3 justify-center">
            <Button loading={isLoading} htmlType="submit" title="CREATE YOUR ACCOUNT" />
          </div>
        </form>
      </div>
    </div>
  );
}
