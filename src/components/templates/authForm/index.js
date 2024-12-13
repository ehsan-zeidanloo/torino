"use client";

import React, { useState } from "react";
import SendOtpForm from "./sendOtpForm";
import CheckOtpForm from "./checkOtpForm";
import ModalContainer from "../../partials/container/ModalContainer";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>ورود</button>
      <div className="flex justify-center m-auto">
        {step === 1 && (
          <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
            <SendOtpForm
              mobile={mobile}
              setMobile={setMobile}
              setStep={setStep}
            />
          </ModalContainer>
        )}

        {step === 2 && (
          <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
            <CheckOtpForm mobile={mobile} setStep={setStep} />
          </ModalContainer>
        )}
      </div>
    </>
  );
}

export default AuthForm;
