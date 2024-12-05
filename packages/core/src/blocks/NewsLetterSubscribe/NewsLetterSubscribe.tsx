// import React from "react";
// import { SubscriptionForm } from "../../components/SubscriptionForm";
// import { subscribeToNewsletter } from "./actions/subscribe";

// export const NewsLetterSubscribe = () => {
//   return (
//     <div className="space-y-2 max-w-md leading-none">
//       <h3 className="text-lg font-semibold text-gray-900 dark:text-white  ">
//         Subscribe to our newsletter
//       </h3>
//       <p className="text-gray-600  dark:text-gray-400  max-w-md">
//         Subscribe to our newsletter for the latest updates and news.
//       </p>
//       <SubscriptionForm
//         addSubscriber={subscribeToNewsletter}
//         buttonText="Subscribe"
//       />
//     </div>
//   );
// };

// packages/core/src/blocks/NewsLetterSubscribe/NewsLetterSubscribe.tsx
import React from "react";
import { SubscriptionForm } from "../../components/SubscriptionForm";

interface NewsLetterSubscribeProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  onSuccess?: (data: { email: string; name?: string }) => void;
  onError?: (error: Error) => void;
  endpoint?: string;
}

export const NewsLetterSubscribe: React.FC<NewsLetterSubscribeProps> = ({
  title = "Subscribe to our newsletter",
  description = "Subscribe to our newsletter for the latest updates and news.",
  buttonText = "Subscribe",
  className = "",
  onSuccess,
  onError,
  endpoint,
}) => {
  return (
    <div className={`space-y-2 max-w-md leading-none ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">{description}</p>
      <SubscriptionForm
        buttonText={buttonText}
        onSuccess={onSuccess}
        onError={onError}
        endpoint={endpoint}
      />
    </div>
  );
};
