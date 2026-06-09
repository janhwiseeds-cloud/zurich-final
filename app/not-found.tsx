export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
            <a
                href="/"
                className="px-6 py-3 bg-green-600 text-white rounded-xl outline-1 border-3 outline-black hover:bg-green-700 transition-colors duration-300"
            >
                Go Back To Home
            </a>
        </div>
    );
}