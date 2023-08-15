"use client";
import Button from "@/components/design/button";
import Input from "@/components/design/input";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useRegisterMutation } from "@/redux/api/auth";
import { useEffect } from "react";

export default function Singup(): JSX.Element {
  const [registerUser, { error, isLoading, data, isSuccess, isError }] = useRegisterMutation();

  const submitform = () => {

    console.log('executed')

    registerUser({
      username: "Credo131232",
      email: "smarket131@bakera.anonaddy.com",
      password: "credo123",
    });

  };

  useEffect(() => {

    if(isSuccess){
      console.log(data)
    }

    if (isError){
      console.log(error)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading])

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="  py-3 px-5  w-80">
        <div className=" w-full flex-col flex gap-4 items-center justify-center">
          <p className="bg-clip-text  text-transparent text-2xl font-semibold bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
            SMARKET
          </p>
          <p className="">Create an account</p>
        </div>
        <form className="rounded flex items-center justify-center flex-col gap-3">
          <div className="w-full">
            <Input
              addonBefore={<AiOutlineUser />}
              label={<p className=" text-sm">Username</p>}
              placeholder="Enter your username"
              type="text"
              required
            />
            <Input
              addonBefore={<AiOutlineMail />}
              label={<p className=" text-sm">Email</p>}
              placeholder="Enter your email address"
              required
            />
            <Input
              addonBefore={<AiOutlineLock />}
              label={<p className=" text-sm">Password</p>}
              placeholder="Enter your password"
              type="password"
              required
            />
            <Input
              addonBefore={<AiOutlineLock />}
              label={<p className=" text-sm">Confirm password</p>}
              placeholder="Confirm your password"
              type="password"
              required
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
            <Button onClick={submitform} htmlType="submit" title="CREATE YOUR ACCOUNT" />
          </div>
        </form>
      </div>
    </div>
  );
}
