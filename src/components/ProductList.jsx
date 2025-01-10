import { useState, useEffect } from "react";
import ProductItem from './ProductItem';

export const useFetchProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProduct(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);  
  
  return { product, loading, error };
};

const ProductList = () => {
  const [search, setSearch] = useState("");
  const { product, loading, error } = useFetchProduct();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = product.filter((item) => 
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, product]);

  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }
  
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto mb-6">
        <input 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for Products"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;