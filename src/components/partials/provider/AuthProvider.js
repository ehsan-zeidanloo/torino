"use client";

import { useGetUserData } from "@/src/core/services/queries";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = useGetUserData();
  console.log(data)

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <p className=" m-auto bg-blue-100 text-blue-500 w-fit animate-ping">
        Loading...
      </p>
    );
  return  children ;
}

export default AuthProvider;
