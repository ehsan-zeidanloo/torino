

import React from "react";
import Image from "next/image";
import AuthForm from "../authForm";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-[1440px] mx-auto p-3.5 mb-12 flex justify-between items-center">
        <div className="w-1/2 flex justify-between items-center">
          <div>
            <Image
              src="/images/Torino.png"
              width={150}
              height={50}
              alt="logo"
            />
          </div>
          <nav>
            <ul className="flex flex-row-reverse">
              <li className="list-none mx-4 cursor-pointer hover:text-green-600 hover:font-medium">تماس با ما</li>
              <li className="list-none mx-4 cursor-pointer hover:text-green-600 hover:font-medium">درباره ما</li>
              <li className="list-none mx-4 cursor-pointer hover:text-green-600 hover:font-medium">خدمات گردشگری</li>
              <li className="list-none mx-4 cursor-pointer hover:text-green-600 hover:font-medium">صفحه اصلی</li>
            </ul>
          </nav>
        </div>
        <div className="border border-green-600 rounded-lg py-2 px-2.5 text-green-600 flex items-center text-sm font-medium cursor-pointer">
          <Image src="/images/frame.png" width={20} height={20} alt="logo" className="ml-1" />
          <AuthForm />
        </div>
      </header>

      <main className="flex-grow ">
        {children}
      </main>

      <footer className="w-full px-36 py-2.5 mx-auto mt-auto border border-black/20">
        <div className="flex justify-between mx-auto w-[90%]">
          <div className="flex w-[300px] items-center">
            <Image
              src="/images/price.png"
              width={100}
              height={100}
              alt="userSatisfaction-image"
              className="ml-2"
            />
            <div className="text-right">
              <h3>بصرفه ترین قیمت</h3>
              <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
            </div>
          </div>
          <div className="flex w-[300px] items-center">
            <Image
              src="/images/support.png"
              width={100}
              height={100}
              alt="userSatisfaction-image"
              className="ml-2"
            />
            <div className="text-right">
              <h3>پشتیبانی</h3>
              <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
            </div>
          </div>
          <div className="flex w-[300px] items-center">
            <Image
              src="/images/heart.png"
              width={100}
              height={100}
              alt="userSatisfaction-image"
              className="ml-2"
            />
            <div className="text-right">
              <h3>رضایت کاربران</h3>
              <p>رضایت بیش از 10هزار کاربر از تور های ما.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5 border-t border-gray-300 pt-4">
          <div className="flex w-1/4 justify-between">
            <div>
              <h3>تورینو</h3>
              <p>درباره ما</p>
              <p>تماس با ما</p>
              <p>چرا تورینو</p>
              <p>بیمه مسافرتی</p>
            </div>
            <div>
              <h3>خدمات مشتریان</h3>
              <p>پشتیبانی آنلاین</p>
              <p>راهنمای خرید</p>
              <p>راهنمای استرداد</p>
              <p>پرسش و پاسخ</p>
            </div>
          </div>
          <div className="text-left w-1/2">
            <div>
              <Image
                src="/images/Torino.png"
                width={120}
                height={35}
                alt="logo"
              />
              <p>
                تلفن پشتیبانی : <span>8574-021</span>
              </p>
            </div>
            <div className="mt-10 flex justify-end gap-8">
              <Image src="/images/state-airline.png" width={75} height={75} alt="logo" />
              <Image src="/images/passenger-rights.png" width={75} height={75} alt="logo" />
              <Image src="/images/ecunion.png" width={75} height={75} alt="logo" />
              <Image src="/images/samandehi.png" width={75} height={75} alt="logo" />
              <Image src="/images/aira.png" width={75} height={75} alt="logo" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;