import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-600">
            <div className="bg-white p-6 items-center rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Error Occurred</h1>
                <h3 className="text-xl text-gray-700 mb-2">
                    {err.status} {err.statusText}
                </h3>
                <h3 className="text-sm text-gray-500">{err.data}</h3>
            </div>
        </div>
    );
}

export default Error;
