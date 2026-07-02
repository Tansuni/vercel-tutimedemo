import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Blog = {
  id: string;
  title: string;
  body: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
};