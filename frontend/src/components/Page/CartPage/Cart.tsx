"use client";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Container from "@/components/Shared/Container/Container";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import CartProductDetails from "./CartProductDetails";
import emptyCart from "@/assest/image/empty-cart.gif";

const Cart = () => {
  const cartProducts = useCart();
  // Calculate the subtotal
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <>
      {cartProducts?.length === 0 ? (
        <div className="w-full h-screen flex  flex-col justify-center items-center gap-8 bg-white">
          <div className="w-[700px] h-96  relative ">
            <Image
              className="absolute"
              fill
              src={emptyCart}
              alt="image"
            />
          </div>
          <button className="px-5 py-2.5 bg-[#193558] text-white rounded">RETURN TO SHOP</button>
        </div>
      ) : (
        <>
          <div className="w-full bg-white py-5">
            <Container className="px-3">
              <Breadcrumb key={1} path="cart" />
            </Container>
          </div>
          <Container className="w-full p-3">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="w-full grid grid-cols-12 gap-5">
              <div className=" col-span-full md:col-span-9">
                <div className="hidden md:grid grid-cols-12 font-semibold p-5 bg-white border-b">
                  <h1 className="col-span-5">Product</h1>
                  <h1 className="col-span-2">Price</h1>
                  <h1 className="col-span-2">Quantity</h1>
                  <div className="col-span-3 flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>Remove</span>
                  </div>
                </div>
                <div>
                  {cartProducts?.map((product) => (
                    <CartProductDetails key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <div className="w-full h-64 col-span-full md:col-span-3 border border-[#193558] p-5 bg-white rounded">
                <h1 className="text-xl font-semibold mb-4">CART TOTALS</h1>
                <div className="grid grid-cols-2 font-semibold gap-3">
                  <div>Subtotal</div>
                  <div>৳{subtotal.toFixed(2)}</div>
                  <div>Shipping</div>
                  <div>Free shipping</div>
                  <div>Total</div>
                  <div>৳{subtotal.toFixed(2)}</div>
                </div>
                <button className="w-full px-5 py-2 rounded bg-[#193558] mt-5 text-white">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Cart;
