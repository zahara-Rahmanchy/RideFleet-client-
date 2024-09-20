import Vehicles from "@/components/Vehicles/Vehicles";
import VehiclesFilterSideBar from "@/components/Vehicles/VehiclesFilterSideBar";

const VehiclesPage = async ({
  searchParams,
}: {
  searchParams: {searchTerm?: string};
}) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const query = new URLSearchParams(searchParams);
  const queries = query.toString();
  console.log("que: ", queries, "\n without string: ", query);
  const paramValue = searchParams.searchTerm || "No param provided";
  console.log("paramValue: ", paramValue);
  console.log(
    "searchParams: ",
    searchParams,
    "url: ",
    `${url}/vehicles/${queries}`
  );
  const res = await fetch(`${url}/vehicles?${queries}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: accessToken ? String(accessToken) : "",
    },

    cache: "no-store",
  });
  const result = await res.json();
  console.log("result: ", result);
  let requestsData;
  let error;
  if (result?.success === true) {
    requestsData = result.data;
  }
  if (result.success === false) {
    error = result.message;
  }
  return (
    <>
      {" "}
      <section className="container  grid  lg:grid-cols-4 grid-cols-1 max-w-screen-xl mx-auto  lg:gap-5 ">
        <VehiclesFilterSideBar />
        <Vehicles requests={result.data} error={error} />
      </section>
    </>
  );
};

export default VehiclesPage;
