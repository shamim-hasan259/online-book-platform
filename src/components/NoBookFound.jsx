const NoBookFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 shadow py-2 mt-5">
      <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-2">No Book Found</h2>

      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for might have been removed or the URL is
        incorrect.
      </p>
    </div>
  );
};

export default NoBookFound;
