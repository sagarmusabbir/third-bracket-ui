// packages/core/src/components/SubscriptionForm/SubscriptionForm.tsx
import React from "react";
import { SubscriptionFormClient } from "./SubscriptionFormClient";
import { SubscriptionFormClientProps } from "./types";

export const SubscriptionForm = ({
  // addSubscriber,
  // buttonText,
  // className,

  buttonText,
  onSuccess,
  onError,
  endpoint,
}: SubscriptionFormClientProps) => {
  return (
    // <SubscriptionFormClient
    //   addSubscriber={addSubscriber}
    //   buttonText={buttonText}
    //   className={className}
    // />

    <SubscriptionFormClient
      buttonText={buttonText}
      onSuccess={onSuccess}
      onError={onError}
      endpoint={endpoint}
    />
  );
};
