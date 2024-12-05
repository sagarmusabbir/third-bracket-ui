// app/api/test-db/route.ts
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`SELECT NOW();`;
    return NextResponse.json({
      success: true,
      timestamp: result.rows[0].now,
      message: "Database connected successfully",
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to connect to database",
      },
      { status: 500 }
    );
  }
}
