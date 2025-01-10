import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../assets/utils/cartSlice';

function ProductItem({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
    alert('Item added to cart!');
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
      <p className="text-gray-600 mt-2">${item.price}</p>
      <div className="flex gap-2 mt-4">
        <Link to={`/product/${item.id}`} className="flex-1">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Details
          </button>
        </Link>
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;