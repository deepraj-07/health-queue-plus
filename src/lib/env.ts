import logger from "./logger";

function getEnv(name: "VITE_SUPABASE_URL" | "VITE_SUPABASE_ANON_KEY"): string {
  const value = import.meta.env[name];

  if (!value) {
    logger.warn(`Missing environment variable: ${name}`);
    return "";
  }

  return value;
}

export const env = {
  VITE_SUPABASE_URL: getEnv("VITE_SUPABASE_URL"),
  VITE_SUPABASE_ANON_KEY: getEnv("VITE_SUPABASE_ANON_KEY"),
};

export const hasSupabaseEnv = Boolean(env.VITE_SUPABASE_URL && env.VITE_SUPABASE_ANON_KEY);