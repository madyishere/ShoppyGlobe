import { useDispatch } from "react-redux";
import { removeItem } from "../assets/utils/cartSlice";

function CartItem({ item })
{
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeItem(item.id));
    }

    return(
        <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
            />
            <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-500">Price: ${item.price}</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <button
                onClick={handleRemove}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
                Remove
            </button>
        </div>
     </div>
    )
}

export default CartItem;