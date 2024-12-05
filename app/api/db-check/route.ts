// app/api/db-check/route.ts
import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";

export async function GET() {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
  });

  try {
    const { rows } = await pool.query("SELECT NOW();");
    await pool.end();

    return NextResponse.json({
      success: true,
      timestamp: rows[0].now,
      message: "Database connected successfully",
    });
  } catch (error) {
    console.error("Connection error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Connection failed",
        connectionString: process.env.POSTGRES_URL_NON_POOLING
          ? "exists"
          : "missing",
      },
      { status: 500 }
    );
  }
}
