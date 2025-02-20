import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "wealth-platform", // Unique app ID
  name: "Wealth Platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});