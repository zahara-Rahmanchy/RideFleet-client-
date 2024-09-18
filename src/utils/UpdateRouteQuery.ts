// urlHelpers.ts
// import { router } from 'next/navigation';
import {Router} from "next/router";

export const updateQueryParams = (
  router: Router,
  key: string,
  value: string
) => {
  const currentParams = new URLSearchParams(window.location.search);
  console.log("value in updatePRar: ", value);
  if (value) {
    currentParams.set(key, value); // Set or update the parameter
  } else {
    currentParams.delete(key); // Remove the parameter if the value is empty
  }

  const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
  router.push(newUrl); // Update URL without refreshing the page
};
