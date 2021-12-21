import Header from "../components/Header";
import Image from "next/image";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { itemState } from "../atoms/itemAtom";
// import { useSession } from "next-auth/client";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useRecoilValue(itemState);
  console.log(items);
//   const total = useSelector(selectTotal);
//   const [session] = useSession();

  const createCheckoutSession = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const checkoutSession = await axios.post(
      "/api/create-checkout-session",
      {
        items,
        // email: session.user.email,
      }
    );

    // Redirect Customer to Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }

  };

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Cart is empty..."
                : "Current Booking"}
            </h1>

            {
                items.length !== 0 &&
                
                <CheckoutProduct
                    key={items[2]}
                    image={items[0]}
                    location ={items[1]}
                    title={items[2]}
                    description={items[3]}
                    price={items[4]}
                    total={items[5]}
                />

            }
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white shadow-sm p-10">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({1} items):{" "}
                <span className="font-bold">
                  { items[5] }
                </span>
              </h2>
              <button
                // disabled={!session}
                onClick={createCheckoutSession}
                role="link"
                className={`button mt-2 ${
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-pointer hover:bg-red-400 hover:text-white rounded-full transition duration-200 ease-out"
                }`}
              >
                {"Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;