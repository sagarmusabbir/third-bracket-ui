// packages/core/src/components/Footer/actions/subscribe.ts
"use server";

import { SubscriptionResponse } from "../../../components/SubscriptionForm/types";

export async function subscribeToNewsletter(
  email: string
): Promise<SubscriptionResponse> {
  try {
    if (!email || !email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("New subscription:", email);

    return {
      success: true,
      message: "Successfully subscribed to our newsletter!",
    };
  } catch (error) {
    console.error("Subscription error:", error);
    throw error;
  }
}
