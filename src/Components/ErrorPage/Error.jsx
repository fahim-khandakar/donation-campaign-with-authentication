import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-10 justify-center h-screen items-center">
      <h1 className="text-4xl font-extrabold text-slate-500">
        Something went wrong
      </h1>
      <p className="text-2xl font-semibold text-slate-600">
        We apologize for the inconvenience. Please try again later.
      </p>
      <Link to="/">
        <button className="py-1 px-8 hover:text-black text-white btn bg-sky-400">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;
