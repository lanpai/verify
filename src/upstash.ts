import { Redis } from "@upstash/redis";

export default new Redis({
  url: import.meta.env.UPSTASH_REDIS_URL,
  token: import.meta.env.UPSTASH_REDIS_TOKEN,
});
