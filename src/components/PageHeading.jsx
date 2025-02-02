/* eslint-disable react/prop-types */

import Separator from "./Separator";

function PageHeading({src, alt, heading}) {
  return (
    <>
      <div className="flex justify-start gap-2 ">
        <img src={src} className={`w-8 h-auto opacity-60`} alt={alt} />
        <h1 className="font-lato font-semibold text-4xl text-heading1">
          {heading}
        </h1>
      </div>
      <Separator />
    </>
  );
}

export default PageHeading;
