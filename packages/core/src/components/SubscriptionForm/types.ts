export interface SubscriptionResponse {
  success: boolean;
  message?: string;
}

export interface SubscriptionFormProps {
  addSubscriber: (email: string) => Promise<SubscriptionResponse>;
  buttonText?: string;
  className?: string;
}

// export interface SubscriptionFormClientProps {
//   // Now we only pass the email instead of the whole event handler
//   addSubscriber: (email: string) => Promise<void>;
//   buttonText?: string;
//   className?: string;
// }

export interface SubscriptionFormClientProps {
  className?: string;
  buttonText?: string;
  onSuccess?: (data: { email: string; name?: string }) => void;
  onError?: (error: Error) => void;
  endpoint?: string;
}
