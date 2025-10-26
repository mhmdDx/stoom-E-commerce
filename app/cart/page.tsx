"use client"

import PaymentForm from "@/companents/paymentForm";
import Shippingform from "@/companents/ShippingForm";
import { CartItemsType, ShippingFormInputs } from "@/companents/Types";
import { ArrowRight, Trash2, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import useCartStore from "../stores/cartStore";
const steps = [
  {
    id: 1,
    tittle: "Shopping Cart"
  },
  {
    id: 2,
    tittle: "Shopping Address "
  },
  {
    id: 3,
    tittle: "Payment Methods"
  }

]

// manual adding
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];


const CartContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippinggform, setShippingform] = useState<ShippingFormInputs | null>(null)

  const activeStep = parseInt(searchParams.get("step") || "1")

  const { cart, removeFromCart } = useCartStore();
  return (
    <div
      className="flex flex-col gap-8 items-center justify-center mt-12">

      <h1 className="text-2xl font-bold flex items-center justify-center ">  Shopping Cart</h1>

      {/* steps */}

      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8 lg:gap-16 ">
        {steps.map(step => (
          <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"} `} key={step.id}>
            <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center"> {step.id}</div>
            <span className="font-medium">{step.tittle}</span>
          </div>
        ))}
      </div>
      {/* steps & details */}
      <div className="w-full flex flex-col lg:flex-row gap-16 ">
        {/* steps */}
        <div className="w-f h-f lg:w-7/12 shadow-lg border-1 border-gray-200 p-8 rounded-lg flex flex-col gap-8">

          {activeStep === 1 ? (

            cart.map((item) => (
              // single item cart
              <div className="flex items-center justify-between" key={item.id}>

                {/* image */}
                <div className="flex gap-8">
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <img src={item.images[item.selectedColor]} />

                  </div>
                  {/* item details */}

                  <div className=" flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Quantity:{" "}{item.quantity}</p>
                      <p className="text-xs text-gray-500">Size:{" "}{item.selectedSize}</p>
                      <p className="text-xs text-gray-500">Color:{" "}{item.selectedColor}</p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>

                  </div>
                </div>

                {/* delete buttum */}
                <button onClick={() => removeFromCart(item)} className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-800 " > <Trash2 /> </button>
              </div>
            ))


          ) : activeStep === 2 ? <Shippingform setShippingForm={setShippingform} /> : activeStep === 3 && (

            activeStep === 3 && shippinggform ? <PaymentForm /> :
              <p className=" text-sm text-gray-500">please fill shipping form</p>
          )}
        </div>
        {/* details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  )

};


const CartPage = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center mt-12"><div className="text-lg">Loading cart...</div></div>}>
      <CartContent />
    </Suspense>
  );
};

export default CartPage;

