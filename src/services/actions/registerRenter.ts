"use server";

import {FieldValues} from "react-hook-form";

export const registerRenter = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/create-renter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const renterInfo = await res.json();
  return renterInfo;
};
