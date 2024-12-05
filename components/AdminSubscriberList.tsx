// components/AdminSubscriberList.tsx
"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  id: number;
  email: string;
  name?: string;
  created_at: string;
}

export function AdminSubscriberList() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const response = await fetch("/api/subscribers");
        const data = await response.json();
        setSubscribers(data.subscribers);
      } catch (error) {
        console.error("Failed to fetch subscribers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscribers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Newsletter Subscribers</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.email}</td>
              <td>{subscriber.name || "-"}</td>
              <td>{new Date(subscriber.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
