import Loader from "../Loader";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts(
    `https://dummyjson.com/products`
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Products</h2>

      {/* Categories: Optional - You can add categories here */}
      <div className="flex justify-center gap-8 mb-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Beauty
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
          Groceries
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none">
          Furniture
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none">
          Fragrances
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
