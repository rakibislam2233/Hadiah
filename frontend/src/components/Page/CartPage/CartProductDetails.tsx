import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/fetures/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook/hook";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
type TCartProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};
const CartProductDetails = ({ product }: { product: TCartProduct }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      key={product?.id}
      className="grid grid-cols-1 md:grid-cols-12 py-6 border-b bg-white px-5"
    >
      <div className="col-span-full md:col-span-5 flex gap-2  items-center">
        <Image
          width={64}
          height={64}
          src={product?.image}
          alt={product?.title}
        />
        <span className="font-semibold">
          {product?.title?.length > 25
            ? `${product?.title.slice(0, 25)}...`
            : product?.title}
        </span>
      </div>
      <h1 className="col-span-full md:col-span-2 flex items-center font-semibold">
      ৳{product?.price.toFixed(2)}
      </h1>
      <div className="col-span-full md:col-span-2 flex items-center">
        <div className="flex items-center">
          <button
            disabled={product?.quantity === 1}
            onClick={() =>
              dispatch(
                decrementQuantity({
                  id: product.id,
                })
              )
            }
            className="p-3 border-l border-t border-b rounded-l"
          >
            <FiMinus className="size-3" />
          </button>
          <h1 className="border flex justify-center items-center p-2 text-sm">
            {product?.quantity}
          </h1>
          <button
            onClick={() =>
              dispatch(
                incrementQuantity({
                  id: product?.id,
                })
              )
            }
            className="p-3 border-r border-t border-b rounded-r"
          >
            <FiPlus className="size-3" />
          </button>
        </div>
      </div>
      <div className="col-span-full md:col-span-3 flex justify-between  items-center gap-5">
        <h1 className="font-semibold">
        ৳{(product?.quantity * product?.price).toFixed(2)}
        </h1>
        <div
          onClick={() => dispatch(removeFromCart({ id: product?.id }))}
          className="col-span-2 size-9 border rounded-full flex justify-center items-center bg-rose-500 text-white cursor-pointer"
        >
          <FaTrash className="size-3" />
        </div>
      </div>
    </div>
  );
};

export default CartProductDetails;
