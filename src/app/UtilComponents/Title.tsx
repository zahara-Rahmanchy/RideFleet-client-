import React from "react";

const Title = ({title}: {title: string}) => {
  return (
    <>
      <h2 className="md:text-5xl text-3xl font-semibold text-sky-900 text-center capitalize mt-10">
        {title}
      </h2>
      <hr className="text-center text-5xl border-yellow-400 border-2 mx-auto w-56 mt-3 border-dashed mb-16" />
    </>
  );
};

export default Title;
