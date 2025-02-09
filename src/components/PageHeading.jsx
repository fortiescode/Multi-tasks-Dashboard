/* eslint-disable react/prop-types */

import Separator from "./Separator";

function PageHeading({ src, alt, heading }) {
  return (
    <>
      <div className="flex justify-start gap-2 ">
        <img src={src} className={`w-10 h-auto opacity-80`} alt={alt} />
        <h1 className="font-roboto font-extrabold tracking-wide text-4xl text-heading1">
          {heading}
        </h1>
      </div>
      <Separator />
    </>
  );
}

export default PageHeading;
