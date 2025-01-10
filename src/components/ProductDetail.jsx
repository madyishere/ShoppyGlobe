import { useParams } from "react-router-dom";
import { useFetchProduct } from "./ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../assets/utils/cartSlice";

function ProductDetail() {
    const { id } = useParams();
    const { product, loading, error } = useFetchProduct();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(currProduct));
        alert('item added to cart!')
    };

    if (loading) return <p className="text-center text-lg">Loading product details...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const currProduct = product.find(p => p.id === parseInt(id, 10));
    if (!currProduct) return <p className="text-center text-lg">Product not found.</p>;

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{currProduct.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <img
                        src={currProduct.thumbnail}
                        alt={currProduct.title}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        {currProduct.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${currProduct.title} ${index + 1}`}
                                className="w-full h-24 object-cover rounded-md cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 text-lg mb-4">{currProduct.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="font-semibold">Price: <span className="text-2xl text-green-600">${currProduct.price}</span></p>
                                {currProduct.discountPercentage > 0 && (
                                    <p className="text-red-500">Discount: {currProduct.discountPercentage}% off</p>
                                )}
                                <p>Rating: {currProduct.rating} ⭐</p>
                                <p>Brand: {currProduct.brand}</p>
                                <p>SKU: {currProduct.sku}</p>
                                <p>Category: {currProduct.category}</p>
                                <p>Stock: {currProduct.stock}</p>
                            </div>
                            <div className="space-y-2">
                                <p>Weight: {currProduct.weight} kg</p>
                                <p>Dimensions: {currProduct.dimensions?.width}x{currProduct.dimensions?.height}x{currProduct.dimensions?.depth} cm</p>
                                <p>Min Order: {currProduct.minimumOrderQuantity} units</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <h3 className="text-xl font-semibold">Shipping & Returns</h3>
                        <p>{currProduct.shippingInformation}</p>
                        <p>{currProduct.returnPolicy}</p>
                        <p>{currProduct.warrantyInformation}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                        <div className="space-y-4">
                            {currProduct.reviews?.map((review, index) => (
                                <div key={index} className="border-b pb-4 last:border-b-0">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">{review.reviewerName}</p>
                                        <p>{review.rating} ⭐</p>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(review.date).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className="cursor-pointer flex-1 active:bg-green-500  px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;