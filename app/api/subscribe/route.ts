// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { createSubscriber } from "@/lib/db/utils";
import { subscriptionSchema } from "@/packages/core/src/hooks/useNewsletterSubscription";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate using the same schema from your hook
    const validatedData = subscriptionSchema.parse(body);

    // Store in database
    const subscriber = await createSubscriber(validatedData);

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
      data: subscriber,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Subscription failed",
      },
      { status: 500 }
    );
  }
}
