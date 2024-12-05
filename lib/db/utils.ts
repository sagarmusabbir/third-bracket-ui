// lib/db/utils.ts
import { sql } from "@vercel/postgres";
import { SubscriptionData } from "@/packages/core/src/hooks/useNewsletterSubscription";

export async function createSubscriber(data: SubscriptionData) {
  try {
    const result = await sql`
      INSERT INTO subscribers (email, name)
      VALUES (${data.email}, ${data.name})
      RETURNING *;
    `;
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

export async function getSubscribers() {
  try {
    const result = await sql`
      SELECT * FROM subscribers 
      WHERE status = 'active' 
      ORDER BY created_at DESC;
    `;
    return result.rows;
  } catch (error) {
    throw error;
  }
}
