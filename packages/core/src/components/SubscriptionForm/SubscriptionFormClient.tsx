// // packages/core/src/components/SubscriptionForm/SubscriptionFormClient.tsx
// "use client";

// import React, { FormEvent } from "react";
// import { Button } from "../Button";
// import { SubscriptionFormProps } from "./types";

// export const SubscriptionFormClient: React.FC<SubscriptionFormProps> = ({
//   addSubscriber,
//   buttonText = "Subscribe",
//   className = "",
// }) => {
//   const [email, setEmail] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState("");
//   const [success, setSuccess] = React.useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const response = await addSubscriber(email);
//       if (response.success) {
//         setSuccess(response.message || "Thank you for subscribing!");
//         setEmail("");
//       }
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Subscription failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={className}>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
//             disabled={loading}
//             required
//           />
//         </div>

//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         {success && <p className="text-green-500 text-sm">{success}</p>}

//         <Button type="submit" disabled={loading}>
//           {loading ? "Subscribing..." : buttonText}
//         </Button>
//       </form>
//     </div>
//   );
// };

// packages/core/src/components/SubscriptionForm/SubscriptionFormClient.tsx
"use client";

import React, { FormEvent } from "react";
import { Button } from "../Button";
import { SubscriptionFormProps } from "./types";

export const SubscriptionFormClient: React.FC<SubscriptionFormProps> = ({
  addSubscriber,
  buttonText = "Subscribe",
  className = "",
}) => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await addSubscriber(email);
      if (response.success) {
        setSuccess(response.message || "Thank you for subscribing!");
        setEmail("");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Subscription failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`  ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex-nowrap flex items-center justify-between group     h-8 rounded-md  border border-dashed bg-gray-100  dark:bg-gray-800 dark:border-gray-700 border-gray-300 text-gray-800 dark:text-gray-200">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@domain.com"
            className=" focus:outline-none focus:ring-0 px-4 bg-gray-100  dark:bg-gray-800  rounded-md   "
            disabled={loading}
            required
          ></input>

          <Button type="submit" disabled={loading} variant="glow" size="base">
            {loading ? "Subscribing..." : buttonText}
          </Button>
        </div>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
      </form>
    </div>
  );
};
