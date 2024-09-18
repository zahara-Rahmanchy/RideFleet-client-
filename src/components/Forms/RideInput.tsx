import React from "react";
import {Controller, useFormContext} from "react-hook-form";

type inputField = {
  name: string;
  type: string;
  id: string;
  placeholder: string;
};

const RideInput = ({name, type, id, placeholder}: inputField) => {
  const {control} = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={field => (
        <input
          {...field}
          type={type}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          // {...register("name", {required: "Name is required"})}
        />
      )}
    />
  );
};

export default RideInput;
