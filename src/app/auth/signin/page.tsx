/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { defaultValues, singinSchema } from "./formValidation";
import { useLoginMutation } from "@/redux/api/auth";
import { message } from "antd";
import { useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slices/currentUser";

export default function Singup(): JSX.Element {
  // ===== State =======
  const [logUser, { isError, isSuccess, isLoading, error, data }] =
    useLoginMutation();
  const dispatch = useAppDispatch()

  const router = useRouter();

  const [msg, messageContex] = message.useMessage();
  

  useEffect(() => {
    if (isSuccess) {
      msg.success(data?.message);
      dispatch(setUser(data?.data!))
      router.push('/');
    }

    if (isError) {
      msg.error(error as string);
    }
  }, [isLoading]);

  // ====== Form handeling ========
  const { handleSubmit, control } = useForm({
    defaultValues: { ...defaultValues },
    resolver :  joiResolver(singinSchema),
    reValidateMode : "onChange"
  });

  const onSubmit = (data: { username: string; password: string }) => {
    logUser({...data})
  };

  return (
    <>
      {messageContex}
      <div className=" w-screen h-screen flex items-center justify-center">
        <div className=" flex flex-col gap-6  py-3 px-5  w-80">
          <div className=" w-full flex-col flex gap-4 items-center justify-center">
            <p className="bg-clip-text  text-transparent text-2xl font-semibold bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
              SMARKET
            </p>
            <p className="">Log into your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded flex items-center justify-center flex-col gap-3">
            <div className="w-full flex flex-col gap-3">
              <Controller
                name="username"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
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
                name="password"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
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
            </div>
            <div className=" w-full flex items-center flex-col gap-3 justify-center">
              <p className=" font-light text-xs">
                Don&apos;t have an account ?
                <Link href={'/auth/signup'}>
                <span className=" font-normal cursor-pointer text-primary-color">
                  Singup
                </span>
                </Link>
              </p>
              <p className=" font-light text-xs">
                <span className=" font-normal cursor-pointer text-primary-color">
                  Forgot password ?
                </span>
              </p>
            </div>
            <div className="flex w-full items-center my-3 justify-center">
              <Button loading={isLoading} htmlType="submit" title="LOG IN" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
