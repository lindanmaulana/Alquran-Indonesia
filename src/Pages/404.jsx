import { Link, useRouteError } from "react-router-dom";

const ErrorFallbackBoundary = () => {
    const error = useRouteError()
    
    return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest mb-3 text-gray-500">
        404 | {error? error : "Not Found"}
      </h1>
      <Link to="/" className="text-sm text-gray-500 py-1 hover:text-primary bg-bgSecondary  rounded-full text-center">Back</Link>
    </div>
  );
};

export default ErrorFallbackBoundary
