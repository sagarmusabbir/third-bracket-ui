// This will be our package entry point
// We'll add component exports here in the next step

export * from "./components/Card";
export * from "./components/AnimatedGrid";

// packages/core/src/index.ts
export * from "./components/Button";

export * from "./blocks/Header";
export * from "./components/ThemeToggle";
export * from "./components/AnimatedGrid";
export * from "./components/Navbar";

// Add this line to export Sidebar
export * from "./components/Sidebar";
export * from "./components/Footer";

// packages/core/src/index.ts
export { NewsLetterSubscribe } from "./blocks/NewsLetterSubscribe/NewsLetterSubscribe";
export { useNewsletterSubscription } from "./hooks/useNewsletterSubscription";
export type { SubscriptionData } from "./hooks/useNewsletterSubscription";
