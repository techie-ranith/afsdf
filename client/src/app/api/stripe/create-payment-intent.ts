// pages/api/stripe-create-payment-intent.ts

import { NextApiRequest, NextApiResponse } from 'next';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type Item = {
  id: string;
  quantity: number;
};

const calculateOrderAmount = (items: Item[]): number => {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * 1400; // Example price
  }, 0);
  return total;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { items } = req.body as { items: Item[] };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "eur",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}