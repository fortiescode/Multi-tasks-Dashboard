/* eslint-disable react/prop-types */

function Button({ text, Primary, Secondary }) {
  return (
    <>
      {Secondary && (
        <button className=" px-3 py-1 cursor-pointer border border-slate-600 font-roboto font-light my-auto bg-stone-400 text-white rounded-md h-8 text-heading1 transition-all duration-200 ease-in-out hover:bg-stone-200 hover:text-stone-600">
          {text}
        </button>
      )}
      {Primary && (
        <button className="px-3 py-1 cursor-pointer border border-slate-600 font-roboto font-light my-auto bg-orange-600 text-white rounded-md h-8 text-heading1 transition-all duration-200 ease-in-out hover:bg-stone-200 hover:text-stone-600">
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
