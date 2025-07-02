import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelectors";
import { formatePrize } from "../../utils/helpers";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-gray-600 text-4xl mt-12">
        Your cart is empty!
      </p>
    );
  }

  const handleRemovecart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531297462065-5b11d0a499e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg3OXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGJ1eXxlbnwwfDB8fHww&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <div className="container mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 overflow-y-auto max-h-[70vh]">
            {/* ------------------------ Individual cart item ------------------------ */}
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                item={cart}
                onRemove={() => handleRemovecart(cart.id)}
                onIncrease={() => handleIncreaseQuantity(cart.id)}
                onDecrease={() => handleDecreaseQuantity(cart.id)}
              />
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl max-h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cart Summary</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-4 text-gray-700">
                <span>Total Items:</span>
                <span className="font-semibold text-lg">{cartItems.length}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-700">
                <span>Total Price:</span>
                <span className="font-semibold text-lg text-green-600">
                  {formatePrize(cartItemsTotal)}
                </span>
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
