import Image from "next/image";
import React from "react";

const CartPage = () => {
    return ( 
        <div className="
            h-fit
            flex
            flex-col
            text-red-500
            lg:flex-row
        "
        >
            {/* PRODUCTS CONTAINER */}
            <div className="
                h-1/2
                p-4
                flex
                flex-col
                justify-center
                overflow-y-scroll
                lg:w-2/3
                lg:h-screen
                2xl:w-1/2
            "
            >
                {/* SINGLE ITEM */}
                <div className="
                    flex
                    items-center
                    justify-between
                    mb-4
                "
                >
                    <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
                    <div className="

                    "
                    >
                        <h1 className="uppercase text-xl font-bold">Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">Price$</h2>
                    <span className="cursor-pointer">X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className="
                    flex
                    items-center
                    justify-between
                    mb-4
                "
                >
                    <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
                    <div className="

                    "
                    >
                        <h1 className="uppercase text-xl font-bold">Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">Price$</h2>
                    <span className="cursor-pointer">X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className="
                    flex
                    items-center
                    justify-between
                    mb-4
                "
                >
                    <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
                    <div className="

                    "
                    >
                        <h1 className="uppercase text-xl font-bold">Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">Price$</h2>
                    <span className="cursor-pointer">X</span>
                </div>
            </div>
            {/* PAYMENT CONTAINER */}
            <div className="
                h-1/2
                p-4
                bg-fuchsia-50
                flex
                flex-col
                gap-4
                justify-center
                lg:w-1/3
                lg:h-screen
                2xl:w-1/2
            "
            >
                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">Price$</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Service Cost</span>
                    <span className="">Price$</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Delivery Cost</span>
                    <span className="text-green-500">FREE</span>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between">
                    <span className="">TOTAL (INCL. VAT)</span>
                    <span className="font-bold">Total$</span>
                </div>
                <button className="
                    bg-red-500
                    text-white
                    p-3
                    rounded-md
                    w-1/2
                    self-end
                "
                >
                    CHECKOUT
                </button>
            </div>
        </div>
     );
}
 
export default CartPage;