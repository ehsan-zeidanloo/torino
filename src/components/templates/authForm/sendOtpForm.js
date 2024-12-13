"use Client"

import toast from "react-hot-toast";
import { useSendOtp } from "@/src/core/services/mutations";
import { isValidMobile } from "@/src/core/utils/validate";

import { useState } from "react";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const [error, setError] = useState("");
  const { isPending, mutate } = useSendOtp();

  const sendOtpHandler = (event) => {
    event.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("لطفا شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          console.log({toast,data})
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className=" m-auto  my-[90px] flex flex-col w-[561px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
      <h4 className="text-xl font-semibold text-center leading-[43.4px] text-[28px] ">
        ورود به تورینو
      </h4>
      <form
        onSubmit={sendOtpHandler}
        className="flex flex-col justify-end gap-10 flex-1"
      >
        <label className="text-[16px] font-light leading-[24.8px]">
          شماره موبایل خود را وارد کنید!
        </label>
        <input
          type="text"
          placeholder="۰۹۱۲۳۳۳****"
          className="w-[491px] h-[54px] rounded-[6px] border border-black border-opacity-25 p-4"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p>{error}</p>}
        <button
          type="submit"
          className="w-[491px] h-[54px] rounded-[6px] border border-black border-opacity-25 p-4 bg-[#28A745] text-white text-[18px] font-medium"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
