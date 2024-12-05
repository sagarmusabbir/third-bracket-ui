// // app/api/subscribers/route.ts
// import { NextResponse } from 'next/server';
// import { getSubscribers } from '@/lib/db/utils';

// export async function GET() {
//   try {
//     const subscribers = await getSubscribers();
//     return NextResponse.json({ subscribers });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch subscribers' },
//       { status: 500 }
//     );
//   }
// }

// app/api/subscribers/route.ts
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { subscriptionSchema } from "@/packages/core/src/hooks/useNewsletterSubscription";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body using your schema
    const validatedData = subscriptionSchema.parse(body);

    // Store subscriber in database
    const result = await sql`
      INSERT INTO subscribers (email, name)
      VALUES (${validatedData.email}, ${validatedData.name || null})
      RETURNING *;
    `;

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
      data: result.rows[0],
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Subscription error:", error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Subscription failed",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.error("Unknown error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Subscription failed",
        error: "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
