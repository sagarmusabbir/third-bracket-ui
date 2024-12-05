// packages/core/src/hooks/useNewsletterSubscription.ts

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
export const subscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
});

export type SubscriptionData = z.infer<typeof subscriptionSchema>;

interface UseNewsletterSubscriptionProps {
  onSuccess?: (data: SubscriptionData) => void;
  onError?: (error: Error) => void;
  endpoint?: string;
}

export const useNewsletterSubscription = ({
  onSuccess,
  onError,
  endpoint = "/api/subscribe",
}: UseNewsletterSubscriptionProps = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SubscriptionData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { handleSubmit, reset } = form;

  const subscribe = async (data: SubscriptionData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      const result = await response.json();

      if (result.success) {
        reset();
        onSuccess?.(data);
      }

      return result;
    } catch (error) {
      const err =
        error instanceof Error ? error : new Error("Subscription failed");
      onError?.(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    subscribe: handleSubmit(subscribe),
  };
};

export type { UseNewsletterSubscriptionProps };
