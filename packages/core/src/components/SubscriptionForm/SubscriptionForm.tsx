// packages/core/src/components/SubscriptionForm/SubscriptionForm.tsx
import React from "react";
import { SubscriptionFormClient } from "./SubscriptionFormClient";
import { SubscriptionFormProps } from "./types";

export const SubscriptionForm = ({
  addSubscriber,
  buttonText,
  className,
}: SubscriptionFormProps) => {
  return (
    <SubscriptionFormClient
      addSubscriber={addSubscriber}
      buttonText={buttonText}
      className={className}
    />
  );
};
