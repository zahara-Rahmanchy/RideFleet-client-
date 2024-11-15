"use client";
import {useRouter} from "next/navigation";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Box} from "../SVGs/Box";
import {
  FaAngleDown,
  FaHamburger,
  FaSort,
  FaSortNumericDownAlt,
  FaSortNumericUpAlt,
} from "react-icons/fa";
import {IoFilterSharp} from "react-icons/io5";
import {ImFilter} from "react-icons/im";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiReset} from "react-icons/bi";
import {ToolIcon, SearchIcon} from "../SVGs/Search";
import {updateQueryParams} from "@/utils/UpdateRouteQuery";
interface IQueryParams {
  searchTerm: string;
  category: string;
  sortBy: string;
  sortOrder: string;
}
const VehiclesFilterSideBar = () => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    searchTerm: "",
    category: "",
    sortBy: "",
    sortOrder: "",
  });

  const [toggle, setToggle] = useState(false);
  console.log("togg: ", toggle);
  const updateQueryParams = () => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        currentQueryParams.set(key, value);
      } else {
        currentQueryParams.delete(key);
      }
    }

    const newUrl = currentQueryParams.toString()
      ? `${window.location.pathname}?${currentQueryParams.toString()}`
      : window.location.pathname;

    router.push(newUrl); // Update the URL
    console.log("newurl: ", newUrl);
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    // console.log("value: ", value, "key: ", key);
    // Update local state
    if (value !== "") {
      setQueryParams(prevParams => ({
        ...prevParams,
        searchTerm: value,
      }));
    }

    // Update query parameters in the URL
    // updateQueryParams();
  };
  const handleSubmit = (key: string) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    // Access input using the name attribute
    const searchInput = form.elements.namedItem(
      "searchValue"
    ) as HTMLInputElement;

    console.log("Vehicle Name:", searchInput.value);

    // console.log("value: ", value, "key: ", key);
    // Update local state
    setQueryParams(prevParams => ({
      ...prevParams,
      [key]: searchInput.value,
    }));

    // // Update query parameters in the URL
    // updateQueryParams();
  };
  const handleSelectChange = (
    event: ChangeEvent<HTMLSelectElement>,
    sortBy: string
  ) => {
    const newSortOrder = event.target.value;

    setQueryParams(prevParams => ({
      ...prevParams,
      sortBy: newSortOrder ? sortBy : "",
      sortOrder: newSortOrder,
    }));

    // updateQueryParams();
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const fleetType = isChecked === true ? event.target.value : "";
    console.log("isChecked", isChecked, "rentalName: ", fleetType);
    setQueryParams(prevParams => ({
      ...prevParams,
      category: fleetType,
    }));

    // updateQueryParams();
  };

  useEffect(() => {
    updateQueryParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  return (
    <div className="lg:col-span-1 w-full h-full md:text-left text-center pt-16 border-r-2 border-r-sky-50 mt-2">
      <button
        className="lg:hidden block  text-sky-900 px-3  w-[90%] mx-auto rounded-md"
        onClick={() => setToggle(!toggle)}
      >
        <span className="flex justify-between items-center p-2 bg-[#eaf3ff] rounded-md shadow-md  ">
          <span className="flex items-center gap-x-3 text-2xl font-semibold ">
            <ImFilter className=" text-4xl  rounded-md p-1 " /> Filters
          </span>
          <IoFilterSharp className="text-sky-900 text-2xl " />
        </span>
      </button>
      <aside
        id="cta-button-sidebar"
        className={`lg:static lg:block z-40  h-full ${
          toggle === true ? "block" : "hidden"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-x-hidden w-[90%]  mx-auto px-3 ">
          <ul className="space-y-2 font-medium">
            <li className="my-6 text-left">
              <form
                className="flex items-center max-w-sm mx-auto text-left"
                onSubmit={handleSubmit("searchTerm")}
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <ToolIcon />
                  </div>
                  <input
                    type="text"
                    name="searchValue"
                    id="simple-search"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-200 focus:border-sky-200 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search brand,model or category..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-sky-900 rounded-lg border border-cyan-200 hover:bg-sky-700 hover:border-sky-300 focus:ring-2 focus:outline-none focus:ring-sky-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <SearchIcon />
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </li>

            <li className="border-[#eaf3fe] border-bottom-8 rounded-md my-6 w-full">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
              >
                <FaSort className=" text-3xl text-sky-900 bg-gray-100 px-1 " />
                <span className="text-left flex-1 ms-3 whitespace-nowrap text-gray-700 font-medium">
                  Sort By Price
                  {/* <FaAngleDown className="lg:hidden sm:block text-sky-900" /> */}
                </span>
              </a>
              <ul className="ms-6 py-2 gap-9 w-full">
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md py-2 my-2">
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                  >
                    <div className="flex items-center  h-2 w-[13rem]">
                      <label
                        id="day-states-button"
                        data-dropdown-toggle="day-dropdown-states"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-5 text-xs font-medium text-center text-white bg-sky-900 border border-sky-300 rounded-s-lg  e  dark:bg-gray-700  dark:text-white dark:border-gray-600"
                        // type="button"
                      >
                        Daily
                      </label>
                      <select
                        onChange={e => handleSelectChange(e, "perDay")}
                        // onChange={handleChange("perDay")}
                        id="day-states"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-xs rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-sky-300 focus:border-sky-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                      >
                        <option selected value="" className="bg-gray-50">
                          Default
                        </option>
                        <option className="bg-gray-50" value="asc">
                          Low to High
                        </option>
                        <option className="bg-gray-50" value="desc">
                          High to Low
                        </option>
                      </select>
                    </div>{" "}
                  </a>
                </li>
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md py-2 my-6">
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                  >
                    <div className="flex items-center  h-2 w-52 rounded">
                      <label
                        id="week-states-button"
                        data-dropdown-toggle="week-dropdown-states"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-900 border border-sky-300 rounded-s-lg  focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700  dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        // type="button"
                      >
                        Weekly
                      </label>
                      <select
                        id="week-states"
                        onChange={e => handleSelectChange(e, "perWeek")}
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-xs rounded-e-lg cursor-pointer border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-sky-300 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected value="" className="bg-gray-50 ">
                          Default
                        </option>
                        <option className="bg-gray-50" value="asc">
                          Low to High
                        </option>
                        <option className="bg-gray-50" value="desc">
                          High to Low
                        </option>
                      </select>
                    </div>{" "}
                  </a>
                </li>
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md py-2 my-2">
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
                  >
                    <div className="flex items-center  h-2 w-52">
                      <label
                        id="month-states-button"
                        data-dropdown-toggle="month-dropdown-states"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-900 border border-sky-300 rounded-s-lg  focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700  dark:text-white dark:border-gray-600"
                        // type="button"
                      >
                        Monthly
                      </label>
                      <select
                        id="month-states"
                        onChange={e => handleSelectChange(e, "perMonth")}
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-xs rounded-e-lg border-s-gray-100 cursor-pointer dark:border-s-gray-700 border-s-2 f focus:ring-sky-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option
                          className="bg-gray-50 text-gray-400"
                          selected
                          value=""
                        >
                          Default
                        </option>
                        <option className="bg-gray-50 " value="asc">
                          Low to High{" "}
                        </option>
                        <option className="bg-gray-50 " value="desc">
                          High to Low
                        </option>
                      </select>
                    </div>{" "}
                  </a>
                </li>
              </ul>
            </li>
            {/* --------------------------------------------- */}

            <li className="border-[#eaf3fe] border-bottom-8 rounded-md my-6">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Box />
                <span className="flex-1 ms-3 whitespace-nowrap text-left">
                  Fleet Types
                </span>
              </a>
              <ul className="ms-6">
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md">
                  <a
                    href="#"
                    // onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex items-center ">
                      <input
                        id="Standard-checkbox"
                        type="checkbox"
                        value="Car"
                        checked={queryParams.category === "Car"} // Bin
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-sky-900 bg-gray-50 border-2 border-sky-900 rounded focus:ring-sky-300 hover:border-sky-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="Standard-checkbox"
                        className="ms-2 text-md font-medium text-sky-900 dark:text-gray-300"
                      >
                        Cars
                      </label>
                    </div>
                  </a>
                </li>
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md">
                  <a
                    href="#"
                    // onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex items-center  h-5">
                      <input
                        id="Student-checkbox"
                        type="checkbox"
                        value="Bike"
                        checked={queryParams.category === "Bike"} // Bin
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-sky-900 bg-gray-50 border-2 border-sky-900 rounded focus:ring-sky-300 hover:border-sky-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="Student-checkbox"
                        className="ms-2 text-md font-medium text-sky-900 dark:text-gray-300"
                      >
                        Bikes
                      </label>
                    </div>{" "}
                  </a>
                </li>
                <li className="border-[#eaf3fe] border-bottom-8 rounded-md">
                  <a
                    href="#"
                    // onClick={e => e.preventDefault()}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex items-center  h-5">
                      <input
                        id="Premium-checkbox"
                        type="checkbox"
                        value="Van"
                        checked={queryParams.category === "Van"} // Bin
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-sky-900 bg-gray-50 border-2 border-sky-900 rounded focus:ring-sky-300 hover:border-sky-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="Premium-checkbox"
                        className="ms-2 text-md font-medium text-sky-900 dark:text-gray-300"
                      >
                        Vans
                      </label>
                    </div>{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default VehiclesFilterSideBar;
