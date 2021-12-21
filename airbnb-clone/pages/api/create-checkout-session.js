// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  //const { items, email } = req.body;
  const { items } = req.body;

  console.log("items is ", items);

      
    let itemsString = items?.join(",");
    console.log(itemsString);

    let itemsArr = itemsString.split(",");
    console.log(itemsArr);

    const image = itemsArr[0];
    const title = itemsArr[1];
    let totalString = itemsArr[5].split(" ");
    let total = totalString[0];
    total = total.slice(1);
    console.log(total);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1K8vWpSEmYjChcsrNzZeLmdk"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: [
        {

            price_data: {
            currency: "gbp",
            product_data: {
                name: title,
            },
            unit_amount: total * 100,
            },
            description: "Continue with your booking",
            quantity: 1,
        }
    ],
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
  });

  res.status(200).json({ id: session.id });
};

// Use this to test the API and create a session ID
// curl -X POST -is "http://localhost:3000/api/create-checkout-session" -d ""