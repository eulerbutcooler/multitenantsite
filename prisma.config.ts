import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use process.env directly (not env()) so `prisma generate` doesn't throw
    // in CI environments where DATABASE_URL may not be set.
    url: process.env.DATABASE_URL ?? "",
  },
});