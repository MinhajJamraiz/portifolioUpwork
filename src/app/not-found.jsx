"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center text-4xl text-red-500"> Page not Found.</div>
      <p className="text-center mt-3">
        The Page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
