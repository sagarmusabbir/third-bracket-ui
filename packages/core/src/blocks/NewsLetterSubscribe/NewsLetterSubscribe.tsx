import React from "react";
import { SubscriptionForm } from "../../components/SubscriptionForm";
import { subscribeToNewsletter } from "./actions/subscribe";

export const NewsLetterSubscribe = () => {
  return (
    <div className="space-y-2 max-w-md leading-none">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white  ">
        Subscribe to our newsletter
      </h3>
      <p className="text-gray-600  dark:text-gray-400  max-w-md">
        Subscribe to our newsletter for the latest updates and news.
      </p>
      <SubscriptionForm
        addSubscriber={subscribeToNewsletter}
        buttonText="Subscribe"
      />
    </div>
  );
};