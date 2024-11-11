export default async function products({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Product: {id}</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">
            Product Details
          </h2>
          <p className="text-gray-600 mt-4">
            Here is the detailed information for product {id}.
          </p>

          <div className="mt-8">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
