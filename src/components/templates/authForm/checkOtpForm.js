"use client";

import { useCheckOtp } from "@/src/core/services/mutations";
import { setCookie } from "@/src/core/utils/cookie";
import { useState } from "react";
import OtpInput from "react18-input-otp";

function CheckOtpForm({ mobile, setStep,setIsOpen }) {
  const [code, setCode] = useState("");
  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();
    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          console.log(data),
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const changeHandler = (otp) => {
    setCode(otp);
  };
  return (
    <div className=" m-auto  my-[90px] flex flex-col w-[561px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
      <h4 className="text-xl font-semibold text-center leading-[43.4px] text-[28px] ">
        کد تایید را وارد کنید
      </h4>
      <form
        onSubmit={checkOtpHandler}
        className="flex flex-col justify-end gap-10 flex-1"
      >
        <label className="text-[16px] font-light leading-[24.8px] ">
          کد تایید به شماره {mobile} ارسال شد
        </label>
        <div style={{ direction: "ltr" }} className="flex justify-center">
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            separator={<span> </span>}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "49px",
              marginRight: "2px",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-[491px] h-[54px] rounded-[6px] border border-black border-opacity-25 p-4 bg-[#28A745] text-white text-[18px] font-medium"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
