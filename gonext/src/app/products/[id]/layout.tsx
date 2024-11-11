export default function productLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="lg:flex">
          <div className="lg:w-2/3">{children}</div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Featured Product
            </h2>
            <p className="text-gray-600 mt-4">
              Check out our featured product of the week! A special offer just
              for you.
            </p>
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                View Featured Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
