"use client";

// components/PaypalButton.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadScript } from "../utils/loadScript";

interface PayPalButtonProps {
  onSuccess: (order: any) => void;
  totalAmount: number; // Add a prop to pass the total amount
}

const PaypalButton: React.FC<PayPalButtonProps> = ({
  onSuccess,
  totalAmount,
}) => {
  const router = useRouter();

  useEffect(() => {
    const encodedClientId = encodeURIComponent(
      "AfNU2W1rieya9sByoirfyeobrLNey09dTEWzvpQ5OWA3pA137ZrW4z9K4jzCjGiFEcGNIZ1_VpXmuhPQ"
    );
    const paypalScript = `https://www.paypal.com/sdk/js?client-id=${encodedClientId}`;

    loadScript(paypalScript, () => {
      (window as any).paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount.toFixed(2), // Set the total amount dynamically
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING", // Exclude shipping address
              },
            });
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture();
            onSuccess(order);
            localStorage.removeItem("cartItems");
            router.push("/");
          },
          style: {
            layout: "vertical",
            fundingicons: true, // Show funding icons
          },
        })
        .render("#paypal-button-container");
    });
  }, [onSuccess, totalAmount, router]);

  return <div className="ml-auto" id="paypal-button-container"></div>;
};

export default PaypalButton;
